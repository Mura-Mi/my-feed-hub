export const config = {
  siteMeta: {
    title: "Mura-Mi's Feed Hub",
    teamName: "Takuya \"Mura-Mi\" Murakami",
    description: "Mura-Mi's online publishing",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://team-blog-hub.vercel.app"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Profile",
      href: "https://murataku.yokohama/",
    },
    {
      title: "GitHub",
      href: "https://github.com/Mura-Mi",
    },
  ],
};
