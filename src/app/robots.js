export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/", "/login/"],
      },
    ],
    sitemap: "https://www.varyonpartners.com/sitemap.xml",
    host: "https://www.varyonpartners.com",
  };
}
