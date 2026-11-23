import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export default function SectionWrapper({
  children,
  id,
  className,
}: SectionWrapperProps) {
  return (
    <div
      id={id}
      className={cn("mx-auto w-full max-w-6xl px-6 py-24", className)}
    >
      {children}
    </div>
  );
}
