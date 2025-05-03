import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Cyber Academy",
    short_name: "CyberAcademy",
    description:
      "Master cybersecurity with our comprehensive learning platform",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1e293b",
    icons: [
      {
        src: "/img/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/img/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/img/logo.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/img/logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
