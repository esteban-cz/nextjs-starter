import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  spinnerDimension?: string | number;
}

function Skeleton({ className, spinnerDimension, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center animate-pulse rounded-lg bg-muted",
        className
      )}
      {...props}
    >
      <Loader2
        className={`animate-spin text-primary ${
          spinnerDimension
            ? `h-${spinnerDimension} w-${spinnerDimension}`
            : `h-16 w-16`
        }`}
      />
    </div>
  );
}

export { Skeleton };
