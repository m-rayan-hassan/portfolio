"use client";

import { useEffect, useMemo, useRef, useState, type RefObject } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

/* ── Tunables ── */
const SCALE = 0.82;

type Orbit = {
  text: string;
  orbitRadius: number;
  speed: number;
  offset: number;
  tilt: [number, number, number];
  opacity: number;
};

/* The original four orbiting callouts: full stack, applied AI, RAG, system design */
const ORBITS: Orbit[] = [
  {
    text: "Full Stack",
    orbitRadius: 1.68,
    speed: 0.06,
    offset: 0.4,
    tilt: [1.2, 0.5, 0.35],
    opacity: 0.35,
  },
  {
    text: "Applied AI",
    orbitRadius: 1.75,
    speed: 0.055,
    offset: 3.0,
    tilt: [0.72, 0.2, 0.32],
    opacity: 0.32,
  },
  {
    text: "RAG Systems",
    orbitRadius: 1.82,
    speed: 0.08,
    offset: 5.8,
    tilt: [0.38, 0.9, 0.12],
    opacity: 0.32,
  },
  {
    text: "System Design",
    orbitRadius: 1.88,
    speed: 0.045,
    offset: 2.2,
    tilt: [1.12, 0.1, 0.55],
    opacity: 0.32,
  },
];

/* ── Atmosphere glow (outer shell) ── */
function Atmosphere() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.02;
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.75, 32, 32]} />
      <meshBasicMaterial
        color="#ffffff"
        transparent
        opacity={0.02}
        side={THREE.BackSide}
      />
    </mesh>
  );
}

/* ── Main globe wireframe ── */
function GlobeWireframe() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.04;
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.5, 48, 48]} />
      <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.2} />
    </mesh>
  );
}

/* ── Subtle latitude/longitude lines ── */
function GlobeGrid() {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.04;
  });

  const latitudes = [-30, 0, 30];
  const longitudes = [-60, 0, 60];

  return (
    <group ref={groupRef}>
      {latitudes.map((lat, i) => {
        const phi = ((90 - lat) * Math.PI) / 180;
        const r = 1.51 * Math.sin(phi);
        const y = 1.51 * Math.cos(phi);
        return (
          <mesh
            key={`lat-${i}`}
            position={[0, y, 0]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <torusGeometry args={[r, 0.0015, 4, 64]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.08} />
          </mesh>
        );
      })}
      {longitudes.map((lng, i) => {
        const theta = (lng * Math.PI) / 180;
        return (
          <mesh key={`lng-${i}`} rotation={[0, theta, 0]}>
            <torusGeometry args={[1.51, 0.0015, 4, 64]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.06} />
          </mesh>
        );
      })}
    </group>
  );
}

/* ── Sparse data points on the surface ── */
function GlobePoints({
  count = 200,
  radius = 1.52,
}: {
  count?: number;
  radius?: number;
}) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const matrices = useMemo(() => {
    const mats: THREE.Matrix4[] = [];
    const goldenRatio = (1 + Math.sqrt(5)) / 2;
    for (let i = 0; i < count; i++) {
      const theta = (2 * Math.PI * i) / goldenRatio;
      const phi = Math.acos(1 - (2 * (i + 0.5)) / count);
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.cos(phi);
      const z = radius * Math.sin(phi) * Math.sin(theta);
      const mat = new THREE.Matrix4().makeTranslation(x, y, z);
      mat.scale(new THREE.Vector3(0.009, 0.009, 0.009));
      mats.push(mat);
    }
    return mats;
  }, [count, radius]);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    if (delta) meshRef.current.rotation.y += delta * 0.06;
  });

  return (
    <instancedMesh
      ref={(instance) => {
        if (!instance) return;
        matrices.forEach((matrix, index) => instance.setMatrixAt(index, matrix));
        instance.instanceMatrix.needsUpdate = true;
        meshRef.current = instance;
      }}
      args={[undefined, undefined, count]}
    >
      <sphereGeometry args={[1, 4, 4]} />
      <meshBasicMaterial color="#ffffff" transparent opacity={0.95} />
    </instancedMesh>
  );
}

/* ── Skill orbits: ring, connector, node and its projected label ──
   The label chips are plain DOM, placed each frame by projecting the node
   through the camera. That keeps all four visible no matter what the camera
   does, which the fixed-point drei overlay could not guarantee. */
function SkillOrbits({
  labelRefs,
}: {
  labelRefs: RefObject<(HTMLSpanElement | null)[]>;
}) {
  const ringRefs = useRef<(THREE.Mesh | null)[]>([]);
  const nodeRefs = useRef<(THREE.Mesh | null)[]>([]);
  const connectorRefs = useRef<(THREE.Mesh | null)[]>([]);

  const eulers = useMemo(() => ORBITS.map((o) => new THREE.Euler(...o.tilt)), []);
  const positions = useMemo(() => ORBITS.map(() => new THREE.Vector3()), []);
  const projected = useMemo(() => new THREE.Vector3(), []);
  const direction = useMemo(() => new THREE.Vector3(), []);
  const up = useMemo(() => new THREE.Vector3(0, 1, 0), []);

  /* Label widths are read once per breakpoint, not once per frame: offsetWidth
     forces a layout, and doing that four times every frame is the classic
     source of scroll jank next to a canvas. */
  const widths = useRef<number[]>([]);
  const measuredAt = useRef(0);

  useFrame(({ clock, camera, size }, delta) => {
    if (size.width !== measuredAt.current) {
      measuredAt.current = size.width;
      widths.current = [];
    }

    const t = clock.getElapsedTime();
    const anchors: { x: number; y: number; index: number }[] = [];

    /* Screen radius of the globe, so chips can be kept clear of the mesh */
    projected.set(1.5 * SCALE, 0, 0).project(camera);
    const globeEdge = projected.x * (size.width / 2) + 26;

    ORBITS.forEach((orbit, i) => {
      const ring = ringRefs.current[i];
      if (ring) ring.rotation.z += delta * 0.004;

      const angle = t * orbit.speed + orbit.offset;
      const position = positions[i]
        .set(
          Math.cos(angle) * orbit.orbitRadius,
          Math.sin(angle) * orbit.orbitRadius,
          0
        )
        .applyEuler(eulers[i]);

      const node = nodeRefs.current[i];
      if (node) node.position.copy(position);

      const connector = connectorRefs.current[i];
      if (connector) {
        direction.copy(position);
        const length = direction.length();
        connector.position.copy(position).multiplyScalar(0.5);
        connector.scale.set(1, length, 1);
        connector.quaternion.setFromUnitVectors(up, direction.normalize());
      }

      const el = labelRefs.current?.[i];
      if (!el) return;

      projected.copy(position).multiplyScalar(SCALE).project(camera);
      const cx = size.width / 2;
      const cy = size.height / 2;

      /* Keep each chip outside the wireframe, sliding it along its own orbit
         line only as far as needed to clear the sphere */
      const dx = projected.x * cx;
      const dy = -projected.y * cy;
      const len = Math.hypot(dx, dy) || 1;
      const reach = Math.max(len, globeEdge);
      const width =
        widths.current[i] || (widths.current[i] = el.offsetWidth) || 80;
      const halfW = width / 2 + 2;
      const x = Math.min(
        Math.max(cx + (dx / len) * reach, halfW),
        size.width - halfW
      );
      const y = Math.min(
        Math.max(cy + (dy / len) * reach, 12),
        size.height - 12
      );

      /* Labels on the far side stay readable, just slightly quieter */
      el.style.opacity = position.z < -0.15 ? "0.92" : "1";
      anchors.push({ x, y, index: i });
    });

    /* Nudge overlapping chips apart so every label stays readable */
    for (let pass = 0; pass < 4; pass++) {
      for (let a = 0; a < anchors.length; a++) {
        for (let b = a + 1; b < anchors.length; b++) {
          const gapX =
            ((widths.current[anchors[a].index] ?? 0) +
              (widths.current[anchors[b].index] ?? 0)) /
              2 +
            6;
          const dx = Math.abs(anchors[b].x - anchors[a].x);
          const dy = anchors[b].y - anchors[a].y;
          if (dx < gapX && Math.abs(dy) < 24) {
            const shift = (24 - Math.abs(dy)) / 2 + 1;
            const sign = dy === 0 ? 1 : Math.sign(dy);
            anchors[a].y -= sign * shift;
            anchors[b].y += sign * shift;
          }
        }
      }
    }

    anchors.forEach(({ x, y, index }) => {
      const el = labelRefs.current?.[index];
      if (!el) return;
      el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(
        1
      )}px, 0) translate(-50%, -50%)`;
    });
  });

  return (
    <>
      {ORBITS.map((orbit, i) => (
        <group key={orbit.text}>
          <mesh
            ref={(el) => {
              ringRefs.current[i] = el;
            }}
            rotation={orbit.tilt}
          >
            <torusGeometry args={[orbit.orbitRadius, 0.003, 8, 128]} />
            <meshBasicMaterial
              color="#ffffff"
              transparent
              opacity={orbit.opacity}
              depthWrite={false}
            />
          </mesh>

          <mesh
            ref={(el) => {
              connectorRefs.current[i] = el;
            }}
          >
            <cylinderGeometry args={[0.005, 0.005, 1, 8]} />
            <meshBasicMaterial
              color="#ffffff"
              transparent
              opacity={0.42}
              depthWrite={false}
            />
          </mesh>

          <mesh
            ref={(el) => {
              nodeRefs.current[i] = el;
            }}
          >
            <sphereGeometry args={[0.032, 14, 14]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={1} />
          </mesh>
        </group>
      ))}
    </>
  );
}

/* ── The 3D scene ── */
function GlobeScene({
  labelRefs,
}: {
  labelRefs: RefObject<(HTMLSpanElement | null)[]>;
}) {
  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[0, 3, 5]} intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={0.3} />

      <group scale={SCALE}>
        <Atmosphere />
        <GlobeWireframe />
        <GlobeGrid />
        <GlobePoints />
        <SkillOrbits labelRefs={labelRefs} />
      </group>
    </>
  );
}

/* ── Exported component ── */
export default function ExpertiseGlobe() {
  const labelRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const hostRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  /* The globe only renders while it is on (or near) screen. Leaving a WebGL
     loop running underneath the rest of the page is the main reason the
     scroll felt heavy. */
  useEffect(() => {
    const el = hostRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { rootMargin: "200px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={hostRef}
      className="relative h-[420px] w-full max-w-[540px] overflow-visible sm:h-[480px] lg:h-[520px]"
    >
      {/* Subtle outer glow, painted as a gradient instead of a blur filter */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div
          className="h-[300px] w-[300px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.018) 0%, rgba(255,255,255,0.006) 45%, transparent 70%)",
          }}
        />
      </div>

      <Canvas
        className="globe-canvas"
        aria-label="Animated expertise globe"
        camera={{ position: [0, 0, 7.0], fov: 30, near: 0.1, far: 100 }}
        dpr={[1, 1.5]}
        frameloop={active ? "always" : "never"}
        performance={{ min: 0.75 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ width: "100%", height: "100%", background: "transparent" }}
      >
        <GlobeScene labelRefs={labelRefs} />
        <OrbitControls
          enableDamping={true}
          dampingFactor={0.05}
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          rotateSpeed={0.4}
          minPolarAngle={Math.PI * 0.25}
          maxPolarAngle={Math.PI * 0.75}
        />
      </Canvas>

      {/* Label layer: one chip per orbit, positioned by the scene each frame */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        aria-hidden="true"
      >
        {ORBITS.map((orbit, i) => (
          <span
            key={orbit.text}
            ref={(el) => {
              labelRefs.current[i] = el;
            }}
            className="globe-label select-none"
          >
            {orbit.text}
          </span>
        ))}
      </div>
    </div>
  );
}
