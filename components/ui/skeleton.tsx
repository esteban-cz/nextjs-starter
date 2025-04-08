import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  spinnerDimension?: string | number;
}

function Skeleton({ className, spinnerDimension, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        "bg-muted flex animate-pulse items-center justify-center rounded-lg",
        className,
      )}
      {...props}
    >
      <Loader2
        className={`text-primary animate-spin ${
          spinnerDimension
            ? `h-${spinnerDimension} w-${spinnerDimension}`
            : `h-16 w-16`
        }`}
      />
    </div>
  );
}

export { Skeleton };
