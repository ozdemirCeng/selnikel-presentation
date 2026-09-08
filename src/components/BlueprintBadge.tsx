import React from 'react';

interface BlueprintBadgeProps {
  label: string;
  tag?: string;
  variant?: 'default' | 'accent' | 'warning' | 'emerald' | 'synthetic';
}

export const BlueprintBadge: React.FC<BlueprintBadgeProps> = ({
  label,
  tag,
  variant = 'default',
}) => {
  const getColors = () => {
    switch (variant) {
      case 'accent':
        return 'border-selnikel-accent/40 bg-selnikel-accent/10 text-cyan-400';
      case 'warning':
        return 'border-selnikel-orange/40 bg-selnikel-orange/10 text-amber-400';
      case 'emerald':
        return 'border-selnikel-emerald/40 bg-selnikel-emerald/10 text-emerald-400';
      case 'synthetic':
        return 'border-selnikel-orange/60 bg-selnikel-orange/20 text-orange-300 font-bold';
      default:
        return 'border-slate-700 bg-industrial-900/80 text-slate-300';
    }
  };

  return (
    <div className="inline-flex items-center gap-2 font-mono text-xs tracking-wider uppercase">
      <div className={`px-2.5 py-1 rounded border ${getColors()} flex items-center gap-1.5 shadow-sm`}>
        <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse"></span>
        {tag && <span className="opacity-70 font-semibold">{tag} │</span>}
        <span>{label}</span>
      </div>
      <div className="hidden sm:block w-8 h-[1px] bg-slate-700"></div>
    </div>
  );
};
