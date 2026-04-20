"use client";

import * as React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

export function Logo({ className }: { className?: string }) {
  const [mounted, setMounted] = React.useState(false);
  const { resolvedTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-10 w-24" />;
  }

  const src =
    resolvedTheme === "dark"
      ? "/logos/logo-vertical-offwhite.svg"
      : "/logos/logo-vertical.svg";

  return (
    <Image
      src={src}
      alt="DevZeen"
      width={120}
      height={51}
      className={className}
      priority
    />
  );
}
