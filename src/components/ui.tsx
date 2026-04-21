import Link from "next/link";

export function BrutalButton({
  href,
  children
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-block border-4 border-black bg-accent px-6 py-3 font-bold text-black shadow-brutal transition-transform hover:-translate-y-1"
    >
      {children}
    </Link>
  );
}

export function BrutalCard({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="brutal-card p-6">
      <h3 className="mb-3 font-title text-xl uppercase">{title}</h3>
      <div className="font-mono text-sm">{children}</div>
    </article>
  );
}
