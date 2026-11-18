// Lets code links (www.usevyra.com/i/<CODE>) open the Android app with the code
// applied: the Android counterpart of apple-app-site-association. Android
// verifies the exact host in the app's intent filter and follows no redirect,
// so it only counts on www. The fingerprint is Google Play's app signing key
// for com.usevyra.android (the key Play signs the installed app with, not the
// upload key).
const PACKAGE = "com.usevyra.android";
const PLAY_APP_SIGNING_SHA256 =
  "59:28:3E:EF:4E:24:B5:2D:D7:4F:68:13:56:ED:93:B3:18:3F:3D:09:DA:84:03:1A:F2:71:8B:59:79:CD:4C:61";

export const dynamic = "force-static";

export function GET() {
  return Response.json([
    {
      relation: ["delegate_permission/common.handle_all_urls"],
      target: {
        namespace: "android_app",
        package_name: PACKAGE,
        sha256_cert_fingerprints: [PLAY_APP_SIGNING_SHA256],
      },
    },
  ]);
}
