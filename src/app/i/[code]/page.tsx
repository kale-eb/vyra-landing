import type { Metadata } from "next";
import { headers } from "next/headers";
import Link from "next/link";
import qrcode from "qrcode-generator";
import { appStoreUrl, codeOffer, normalizeCode, resolveCodeLink, WEB_SIGNUP_URL } from "@/lib/code-links";
import CodeActions, { type Device } from "./CodeActions";

// Code links: a creator's, a friend's or Vyra's own code. Someone with the
// iPhone app never sees this page (the link opens the app with the code
// applied); everyone else picks the app or the web here.
export const dynamic = "force-dynamic";

type Props = { params: Promise<{ code: string }> };

const display = { fontFamily: "'Cabinet Grotesk', sans-serif" };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const link = await resolveCodeLink((await params).code);
  const title = link ? `${codeOffer(link).headline} | Vyra` : "Vyra code";
  return {
    title,
    description: link ? codeOffer(link).detail : "Vyra is an AI video editor for your own footage.",
    robots: { index: false, follow: false },
    alternates: { canonical: null },
    openGraph: { title },
  };
}

/** Which way in leads. An iPad that reports itself as a Mac gets the computer's page, which offers both. */
function deviceOf(userAgent: string): Device {
  if (/iPhone|iPad|iPod/.test(userAgent)) return "iphone";
  if (/Android/.test(userAgent)) return "android";
  return "computer";
}

/** The QR code a computer shows, as one SVG path: scanning it opens this page on the phone. */
function qrPath(text: string): { d: string; size: number } {
  const qr = qrcode(0, "M");
  qr.addData(text);
  qr.make();
  const count = qr.getModuleCount();
  let d = "";
  for (let y = 0; y < count; y++) for (let x = 0; x < count; x++) if (qr.isDark(y, x)) d += `M${x} ${y}h1v1h-1z`;
  return { d, size: count };
}

export default async function CodePage({ params }: Props) {
  const typed = (await params).code;
  const link = await resolveCodeLink(typed);
  const offer = link ? codeOffer(link) : null;
  const code = link?.code ?? normalizeCode(typed);
  const device = deviceOf((await headers()).get("user-agent") ?? "");
  const qr = link ? qrPath(`https://www.usevyra.com/i/${link.code}`) : null;

  return (
    <>
      <nav className="fixed top-0 right-0 left-0 z-50 border-b border-[var(--surface-border)] bg-white/80 backdrop-blur-2xl backdrop-saturate-150">
        <div className="mx-auto flex h-[64px] max-w-6xl items-center px-6">
          <Link href="/" className="text-[22px] font-extrabold tracking-tight text-[var(--foreground)]" style={display}>
            Vyra
          </Link>
        </div>
      </nav>

      <main className="mx-auto flex min-h-screen max-w-xl flex-col justify-center px-5 pt-24 pb-16">
        {link && offer ? (
          <>
            <h1 className="text-[34px] leading-[1.08] font-bold tracking-tight text-[var(--foreground)] sm:text-5xl" style={display}>
              {offer.headline}
            </h1>
            <p className="mt-4 text-[16px] leading-[1.6] text-[var(--foreground-muted)]">{offer.detail}</p>
            <CodeActions
              device={device}
              code={link.code}
              kind={link.kind}
              web={offer.web}
              appStoreUrl={appStoreUrl(link.campaign ?? `i_${link.code.toLowerCase()}`)}
              webUrl={`${WEB_SIGNUP_URL}?${new URLSearchParams({ ref: link.code })}`}
              qr={qr}
            />
            <p className="mt-10 text-[14px] leading-[1.6] text-[var(--foreground-subtle)]">
              Vyra is an AI video editor that cuts your own footage by chat.{" "}
              <Link href="/" className="font-medium text-[var(--foreground-muted)] underline underline-offset-4">
                See how it works
              </Link>
            </p>
          </>
        ) : (
          <>
            <h1 className="text-[34px] leading-[1.08] font-bold tracking-tight text-[var(--foreground)] sm:text-5xl" style={display}>
              This code isn&apos;t active
            </h1>
            <p className="mt-4 text-[16px] leading-[1.6] text-[var(--foreground-muted)]">
              {code ? `${code} has ended or was mistyped.` : "That link doesn't hold a Vyra code."} You can still try Vyra
              without one.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={appStoreUrl()}
                className="inline-flex h-[52px] items-center justify-center rounded-full bg-[var(--foreground)] px-7 text-[15px] font-semibold text-white"
              >
                Get the iPhone app
              </a>
              <a
                href={WEB_SIGNUP_URL}
                className="inline-flex h-[52px] items-center justify-center rounded-full border border-black/15 bg-white px-7 text-[15px] font-semibold text-[var(--foreground)]"
              >
                Use Vyra on the web
              </a>
            </div>
          </>
        )}
      </main>
    </>
  );
}
