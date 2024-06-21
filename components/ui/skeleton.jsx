import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-slate-900/25", className)}
      {...props}
    />
  );
}

export { Skeleton };
