const baseURL = "http://localhost:3000";

const info = {
  author: [
    {
      name: "Štěpán Tomečka",
      url: "",
    },
  ],

  name: "Next.js Starter",
  description: {
    cs: "Nejlepší Next.js starter s Shadcn/ui a Tailwind CSS",
    en: "The best Next.js starter with Shadcn/ui and Tailwind CSS",
  },
  keywords: "next.js, starter",
  icon: "/icon.png",

  image: "/img/banner.png",
};

const routes = {
  "/": {
    label: "Homepage",
    nav: true,
    protected: false,
  },
  "/secret": {
    label: "Secret",
    nav: false,
    protected: {
      role: "admin",
    },
  },
};

export { baseURL, info, routes };
