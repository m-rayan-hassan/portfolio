import Image from "next/image";
import { cn } from "@/lib/utils";

export function RMark({
  className,
  src = "/logo-mark.png",
}: {
  className?: string;
  src?: string;
}) {
  return (
    <Image
      src={src}
      alt=""
      width={160}
      height={160}
      unoptimized
      className={cn(
        "h-10 w-10 shrink-0 rounded-[5px] object-contain",
        className
      )}
    />
  );
}

export function Wordmark({
  className,
  markClassName,
  markSrc = "/logo-mark.png",
}: {
  className?: string;
  markClassName?: string;
  markSrc?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 leading-none", className)}>
      <RMark className={markClassName} src={markSrc} />
      <span className="translate-y-[3px] font-display text-[19px] italic leading-none tracking-[-0.01em]">
        Rayan
      </span>
    </span>
  );
}
