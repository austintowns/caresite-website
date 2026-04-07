export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline font-bold tracking-tight ${className}`}>
      <span className="text-primary-500">Care</span>
      <span className="text-slate-800">site</span>
      <span className="text-primary-500 font-medium">.io</span>
    </span>
  );
}
