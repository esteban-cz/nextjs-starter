"use client";

import { Tilt } from "@/components/ui/tilt";
import { useDevice } from "@/hooks/use-device";

interface ResponsiveTiltProps {
  rotationFactor: number;
  children: React.ReactNode;
}

export default function ResponsiveTilt({
  rotationFactor,
  children,
}: ResponsiveTiltProps) {
  const isDesktop = useDevice();

  if (isDesktop) {
    return (
      <Tilt rotationFactor={rotationFactor} isReverse>
        {children}
      </Tilt>
    );
  }
  return <>{children}</>;
}
