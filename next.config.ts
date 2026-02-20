import type { NextConfig } from "next";

const securityHeaders = [
  // Prevent the page from being embedded in iframes (clickjacking protection)
  { key: "X-Frame-Options", value: "DENY" },
  // Prevent MIME-type sniffing
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Control referrer information sent with requests
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Enforce HTTPS for 2 years, including subdomains
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  // Restrict access to browser features
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  // Basic CSP — tighten as the app grows (e.g. add nonce-based CSP for scripts)
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'", // 'unsafe-inline' required by Next.js App Router
      "style-src 'self' 'unsafe-inline'",  // required by Tailwind inline styles
      "img-src 'self' data: blob:",
      "font-src 'self'",                   // next/font self-hosts fonts — no external CDN needed
      "connect-src 'self'",
      "frame-ancestors 'none'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  devIndicators: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
