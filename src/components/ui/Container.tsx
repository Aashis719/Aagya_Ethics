import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}

export default function Container({
  children,
  className,
  size = "default",
}: ContainerProps) {
  const sizes = {
    narrow: "max-w-4xl",
    default: "max-w-7xl",
    wide: "max-w-[1600px]",
  };

  return (
    <div
      className={cn(
        "w-full mx-auto px-6 md:px-12 lg:px-20",
        sizes[size],
        className
      )}
    >
      {children}
    </div>
  );
}

