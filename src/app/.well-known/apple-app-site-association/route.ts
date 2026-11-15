// Lets code links (www.usevyra.com/i/<CODE>) open the iPhone app with the code
// applied. Apple reads this file from the exact host in the app's Associated
// Domains and follows no redirect, so it only counts on www. Only /i/ is
// claimed: /go/ stays a web page that counts the click first.
const TEAM = "W7ZP7X4DYU";
const BUNDLES = ["com.usevyra.ios", "com.usevyra.ios.staging"];

export const dynamic = "force-static";

export function GET() {
  return Response.json({
    applinks: {
      details: [
        {
          appIDs: BUNDLES.map((bundle) => `${TEAM}.${bundle}`),
          components: [{ "/": "/i/*", comment: "Code links" }],
        },
      ],
    },
  });
}
