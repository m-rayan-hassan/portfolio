import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /* Serve optimised images inline; "attachment" makes browsers download them
       instead of rendering them inside <img>. */
    contentDispositionType: "inline",
  },
};

export default nextConfig;
