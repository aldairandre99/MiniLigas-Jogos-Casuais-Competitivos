export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Mini Ligas Jogos Casuais Competitivos",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Jogos",
      href: "/jogos",
    }
  ],
  navMenuItems: [
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Login",
      href: "/login",
    },
  ],
  links: {
    github: "https://github.com/frontio-ai/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
