const baseURL = "http://localhost:3000";

const info = {
  name: "Next.js Starter",
  description: "Next.js + shadcn-ui",
  keywords: "next.js, starter",
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
