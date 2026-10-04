import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import PromptBlock from "./PromptBlock";

function textOf(node: React.ReactNode): string {
  if (typeof node === "string") return node;
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (node && typeof node === "object" && "props" in node) {
    const p = (node as { props?: { children?: React.ReactNode } }).props;
    return textOf(p?.children ?? "");
  }
  return "";
}

const components: Components = {
  h2: ({ children }) => (
    <h2 className="mt-12 mb-4 text-2xl font-semibold tracking-tight text-[var(--foreground)] first:mt-0">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 mb-2 text-[17px] font-semibold text-[var(--foreground)]">{children}</h3>
  ),
  p: ({ children }) => <p className="my-4 leading-[1.8]">{children}</p>,
  strong: ({ children }) => <strong className="font-semibold text-[var(--foreground)]">{children}</strong>,
  a: ({ href, children }) => {
    const h = String(href ?? "");
    if (h.startsWith("/")) {
      return (
        <Link href={h} className="text-[var(--brand-blue)] underline underline-offset-2">
          {children}
        </Link>
      );
    }
    return (
      <a
        href={h}
        className="text-[var(--brand-blue)] underline underline-offset-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  },
  ul: ({ children }) => <ul className="my-4 list-disc space-y-2 pl-6 marker:text-[var(--foreground-subtle)]">{children}</ul>,
  ol: ({ children }) => <ol className="my-4 list-decimal space-y-2 pl-6 marker:text-[var(--foreground-subtle)]">{children}</ol>,
  li: ({ children }) => <li className="pl-1 leading-[1.7]">{children}</li>,
  blockquote: ({ children }) => <PromptBlock text={textOf(children).trim()} />,
  pre: ({ children }) => <PromptBlock text={textOf(children).replace(/\n$/, "")} />,
  code: ({ children, className }) => {
    if (className) return <code className={className}>{children}</code>;
    return (
      <code className="rounded bg-[var(--surface)] px-1.5 py-0.5 text-[13px] text-[var(--foreground)]">{children}</code>
    );
  },
  table: ({ children }) => (
    <div className="my-6 overflow-x-auto rounded-xl border border-[var(--surface-border)] bg-white">
      <table className="w-full border-collapse text-[14px]">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="border-b border-[var(--surface-border)] bg-[var(--surface)]">{children}</thead>,
  th: ({ children }) => (
    <th scope="col" className="px-4 py-3 text-left text-[13px] font-semibold text-[var(--foreground)]">
      {children}
    </th>
  ),
  tr: ({ children }) => <tr className="border-b border-[var(--surface-border)] last:border-b-0">{children}</tr>,
  td: ({ children }) => <td className="px-4 py-3 align-top text-[var(--foreground-muted)] first:font-medium first:text-[var(--foreground)]">{children}</td>,
  hr: () => <hr className="my-10 border-[var(--surface-border)]" />,
  img: ({ src, alt }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={String(src ?? "")} alt={String(alt ?? "")} title={String(alt ?? "")} className="my-6 max-h-[560px] w-auto rounded-xl border border-[var(--surface-border)]" loading="lazy" />
  ),
};

export default function Markdown({ source }: { source: string }) {
  return (
    <div className="text-[15px] text-[var(--foreground-muted)]">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {source}
      </ReactMarkdown>
    </div>
  );
}
