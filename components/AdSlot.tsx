/**
 * Clearly marked, optional ad placeholder. Replace the inner div with real
 * AdSense (or other network) code once the site is approved. Kept visually
 * separated from navigation, buttons and body copy per AdSense policy.
 */
export default function AdSlot({ label = "Advertisement", className = "" }: { label?: string; className?: string }) {
  return (
    <div className={`my-8 ${className}`} aria-label={label}>
      <p className="mb-1 text-center text-[10px] uppercase tracking-wide text-ink/40">{label}</p>
      <div className="flex min-h-[90px] items-center justify-center rounded border border-dashed border-line bg-white text-xs text-ink/30">
        Ad slot — replace with AdSense unit
      </div>
    </div>
  );
}
