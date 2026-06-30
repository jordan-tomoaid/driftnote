import type { NextConfig } from "next";
import { fileURLToPath } from "node:url";

// GitHub Pages serves a project repo under /<repo>. Set NEXT_PUBLIC_BASE_PATH
// to "/driftnote" in CI (the Pages deploy workflow does this). Locally it is
// empty so the dev server and `pnpm build` preview work at the root.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Emit a fully static site into ./out — required for GitHub Pages.
  output: "export",
  // GitHub Pages has no Next.js image optimizer, so serve images as-is.
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
  // Pages serves /foo as /foo/index.html — trailing slashes keep links working.
  trailingSlash: true,
  // Pin the workspace root — a parent lockfile in the home dir otherwise makes
  // Next infer the wrong root and warn on every build.
  turbopack: { root: fileURLToPath(new URL(".", import.meta.url)) },
};

export default nextConfig;
