import Link from "next/link";
import { ReactNode } from "react";

interface BrutalButtonProps {
  href?: string;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "default" | "black" | "white";
  type?: "button" | "submit" | "reset";
}

export function BrutalButton({
  href,
  children,
  onClick,
  className = "",
  variant = "default",
  type = "button"
}: BrutalButtonProps) {
  const baseClasses = "inline-block border-4 border-black px-6 py-3 font-bold text-black shadow-brutal transition-transform hover:-translate-y-1";
  
  const variantClasses = {
    default: "bg-black text-white",
    black: "bg-black text-white",
    white: "bg-white text-black"
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

interface BrutalCardProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function BrutalCard({
  title,
  children,
  className = ""
}: BrutalCardProps) {
  return (
    <article className={`border-4 border-black p-6 ${className}`}>
      <h3 className="mb-3 font-title text-xl uppercase">{title}</h3>
      <div className="font-mono text-sm">{children}</div>
    </article>
  );
}
