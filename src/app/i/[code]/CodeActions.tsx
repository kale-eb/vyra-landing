"use client";

import { useRef, useState } from "react";
import { track } from "@vercel/analytics";
import { trackLead } from "@/components/MetaPixel";
import { marketingAnalytics } from "@/lib/marketing-analytics";

export type Device = "iphone" | "android" | "computer";
type Props = {
  /** Read from the request, so the right button leads from the first paint. */
  device: Device;
  code: string;
  kind: string;
  /** Whether the web app can redeem this kind of code. */
  web: boolean;
  appStoreUrl: string;
  webUrl: string;
  qr: { d: string; size: number } | null;
};

async function copy(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // In-app browsers (Instagram, TikTok) often refuse the clipboard API.
    const field = document.createElement("textarea");
    field.value = text;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.appendChild(field);
    field.select();
    let done = false;
    try {
      done = document.execCommand("copy");
    } catch {}
    field.remove();
    return done;
  }
}

const primary =
  "inline-flex h-[54px] w-full items-center justify-center rounded-full bg-[var(--foreground)] px-7 text-[16px] font-semibold text-white transition-colors hover:bg-[#222] focus-visible:outline-2 focus-visible:outline-offset-4";
const secondary =
  "inline-flex h-[54px] w-full items-center justify-center rounded-full border border-black/15 bg-white px-7 text-[16px] font-semibold text-[var(--foreground)] transition-colors hover:border-black/30 focus-visible:outline-2 focus-visible:outline-offset-4";
const note = "mt-2 text-center text-[13px] leading-[1.5] text-[var(--foreground-muted)]";

export default function CodeActions({ device, code, kind, web, appStoreUrl, webUrl, qr }: Props) {
  const [copied, setCopied] = useState(false);
  const codeText = useRef<HTMLParagraphElement>(null);

  function clicked(target: "app" | "web" | "copy") {
    const properties = { source_page: "code_link", code_kind: kind, target };
    track("Code link click", properties);
    void marketingAnalytics.capture("code_link_clicked", properties);
    if (target === "app") trackLead("iOS App Store click");
  }

  async function copyCode() {
    clicked("copy");
    if (await copy(code)) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } else if (codeText.current) {
      // The browser refused: leave the code selected, one tap from its own Copy.
      window.getSelection()?.selectAllChildren(codeText.current);
    }
  }

  // The App Store drops the code on the way to a new install, so the button
  // copies it first and setup's code step has a Paste button.
  const app = (className: string) => (
    <div>
      <a
        href={appStoreUrl}
        data-testid="code-app"
        className={className}
        onClick={() => {
          clicked("app");
          void copy(code);
        }}
      >
        Get the iPhone app
      </a>
      <p className={note}>We copy your code. Paste it when setup asks for one.</p>
    </div>
  );
  const onWeb = (className: string) => (
    <div>
      <a href={webUrl} data-testid="code-web" className={className} onClick={() => clicked("web")}>
        Use Vyra on the web
      </a>
      <p className={note}>Your code is added when you sign up.</p>
    </div>
  );

  return (
    <div className="mt-8" data-device={device}>
      <div className="flex items-center justify-between gap-4 rounded-2xl border border-[var(--surface-border)] bg-white py-3 pr-3 pl-5">
        <div className="min-w-0">
          <p className="text-[12px] font-semibold tracking-[0.08em] text-[var(--foreground-muted)] uppercase">Your code</p>
          <p ref={codeText} data-testid="code-value" className="truncate font-mono select-all text-[24px] font-bold tracking-[0.06em] text-[var(--foreground)]">
            {code}
          </p>
        </div>
        <button
          type="button"
          onClick={copyCode}
          data-testid="code-copy"
          aria-live="polite"
          className="h-[44px] shrink-0 rounded-full border border-black/15 px-5 text-[15px] font-semibold text-[var(--foreground)] transition-colors hover:border-black/30 focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      <div className="mt-6 flex flex-col gap-5">
        {device === "iphone" && (
          <>
            {app(primary)}
            {web && onWeb(secondary)}
          </>
        )}
        {device === "android" &&
          (web ? (
            <>
              {onWeb(primary)}
              <p className={note}>Vyra&apos;s app is on iPhone. On Android, Vyra runs in your browser.</p>
            </>
          ) : (
            <p className="text-[15px] leading-[1.6] text-[var(--foreground-muted)]">
              This code works in Vyra&apos;s iPhone app. Open this link on an iPhone to use it.
            </p>
          ))}
        {device === "computer" && (
          <>
            {web && onWeb(primary)}
            <div className="flex items-center gap-5 rounded-2xl border border-[var(--surface-border)] bg-white p-4">
              {qr && (
                <svg
                  role="img"
                  aria-label="QR code for this page"
                  viewBox={`-2 -2 ${qr.size + 4} ${qr.size + 4}`}
                  className="h-[112px] w-[112px] shrink-0"
                  shapeRendering="crispEdges"
                >
                  <rect x="-2" y="-2" width={qr.size + 4} height={qr.size + 4} fill="#fff" />
                  <path d={qr.d} fill="#111" />
                </svg>
              )}
              <div className="min-w-0">
                <p className="text-[16px] font-semibold text-[var(--foreground)]">
                  {web ? "Or get the iPhone app" : "Get the iPhone app"}
                </p>
                <p className="mt-1 text-[14px] leading-[1.5] text-[var(--foreground-muted)]">
                  Scan with your iPhone camera to open this page there
                  {web ? "." : ". This code works in the app."}
                </p>
                <a
                  href={appStoreUrl}
                  data-testid="code-app"
                  onClick={() => clicked("app")}
                  className="mt-2 inline-block text-[14px] font-medium text-[var(--foreground)] underline underline-offset-4"
                >
                  View on the App Store
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
