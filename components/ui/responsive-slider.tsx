"use client";

import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { useDevice } from "@/hooks/use-device";

interface ResponsiveSliderProps {
  gap: number;
  speedOnHover?: number;
  speed?: number;
  children: React.ReactNode;
}

export default function ResponsiveSlider({
  gap,
  speedOnHover,
  speed,
  children,
}: ResponsiveSliderProps) {
  const isDesktop = useDevice();

  if (isDesktop) {
    return (
      <InfiniteSlider gap={gap} speedOnHover={speedOnHover} speed={speed}>
        {children}
      </InfiniteSlider>
    );
  }
  return <>{children}</>;
}
