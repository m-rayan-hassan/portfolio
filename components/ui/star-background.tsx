"use client";

import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface StarBackgroundProps {
  className?: string;
}

export default function StarBackground({ className }: StarBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      setContext(ctx);
    }
  }, []);

  useEffect(() => {
    if (!context || dimensions.width === 0) return;

    let animationFrameId: number;
    const stars: { x: number; y: number; radius: number; alpha: number; speed: number; color: string }[] = [];
    const particles: { x: number; y: number; radius: number; alpha: number; speed: number; vx: number; vy: number }[] = [];

    // Create stars
    for (let i = 0; i < 200; i++) {
        const isBlue = Math.random() > 0.8;
      stars.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        radius: Math.random() * 1.5,
        alpha: Math.random(),
        speed: Math.random() * 0.05,
        color: isBlue ? "100, 200, 255" : "255, 255, 255",
      });
    }

    // Create floating particles
    for (let i = 0; i < 50; i++) {
        particles.push({
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
            radius: Math.random() * 2,
            alpha: Math.random() * 0.5,
            speed: Math.random() * 0.2,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
        });
    }

    const render = () => {
      context.clearRect(0, 0, dimensions.width, dimensions.height);

      // Render Stars
      stars.forEach((star) => {
        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(${star.color}, ${star.alpha})`;
        context.fill();

        // Twinkle effect
        star.alpha += star.speed * (Math.random() > 0.5 ? 1 : -1);
        if (star.alpha < 0.1) star.alpha = 0.1;
        if (star.alpha > 0.8) star.alpha = 0.8;

        // Slight movement
        star.y -= star.speed * 0.5;
        if (star.y < 0) star.y = dimensions.height;
      });

      // Render Particles
      particles.forEach((p) => {
        context.beginPath();
        context.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(0, 240, 255, ${p.alpha})`; // Cyan particles
        context.fill();
        
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = dimensions.width;
        if (p.x > dimensions.width) p.x = 0;
        if (p.y < 0) p.y = dimensions.height;
        if (p.y > dimensions.height) p.y = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [context, dimensions]);

  return (
    <canvas
      ref={canvasRef}
      width={dimensions.width}
      height={dimensions.height}
      className={cn("fixed inset-0 z-[-1] pointer-events-none bg-space-black", className)}
    />
  );
}
