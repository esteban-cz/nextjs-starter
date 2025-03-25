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
    cs: "Next.js + shadcn-ui",
    en: "Next.js + shadcn-ui",
  },
  keywords: "next.js, starter",
  icon: "/icon.png",

  image: "/img/banner.png",
};

const routes = {
  "/": {
    label: {
      cs: "Domovská stránka",
      en: "Homepage",
    },
    nav: true,
    protected: false,
  },
  "/secret": {
    label: {
      cs: "Tajemství",
      en: "Secret",
    },
    nav: false,
    protected: {
      role: "admin",
    },
  },
};

export { baseURL, info, routes };
