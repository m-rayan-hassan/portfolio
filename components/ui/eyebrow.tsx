interface EyebrowProps {
  index: string;
  label: string;
  className?: string;
}

export default function Eyebrow({ index, label, className }: EyebrowProps) {
  return (
    <div className={className}>
      <div className="flex items-center gap-3">
        <span className="eyebrow tabular-nums opacity-40">{index}</span>
        <span className="h-px w-6 bg-current opacity-20" />
        <span className="eyebrow opacity-60">{label}</span>
      </div>
    </div>
  );
}
