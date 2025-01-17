import fs from "fs"; // To work with the file system
import path from "path"; // To handle file paths
import blogData from "./src/Db/blogs.js";
const outputPath = path.join("public", "sitemap.xml");

const generateSitemap = async () => {
  try {
    let dynamicPaths = [];
    // Create the XML content as a string

    const blogRoutes = blogData
      .map((blog) => `/blog/${blog.route}`) // Generate individual blog route
      .map((blogRoute) => ({
        path: blogRoute,
        priority: 0.7,
        changefreq: "daily",
      }));

    dynamicPaths = [...dynamicPaths, ...blogRoutes];

    let xmlFiletoWrite = dynamicPaths?.map((item) => {
      return `<url> <loc>https://mahaballoonadventures.ae${item?.path}</loc> </url>\n<url> <loc>https://mahaballoonadventures.ae/en${item?.path}</loc> </url>\n<url> <loc>https://mahaballoonadventures.ae/ar${item?.path}</loc> </url>`;
    });

    const xmlData = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">


<url> <loc>https://mahaballoonadventures.ae/</loc> </url>
<url> <loc>https://mahaballoonadventures.ae/why-us</loc> </url>
<url> <loc>https://mahaballoonadventures.ae/en/why-us</loc> </url>
<url> <loc>https://mahaballoonadventures.ae/ar/why-us</loc> </url>

<url> <loc>https://mahaballoonadventures.ae/experiences</loc> </url>
<url> <loc>https://mahaballoonadventures.ae/en/experiences</loc> </url>
<url> <loc>https://mahaballoonadventures.ae/ar/experiences</loc> </url>

<url> <loc>https://mahaballoonadventures.ae/things-to-do</loc> </url>
<url> <loc>https://mahaballoonadventures.ae/en/things-to-do</loc> </url>
<url> <loc>https://mahaballoonadventures.ae/ar/things-to-do</loc> </url>

<url> <loc>https://mahaballoonadventures.ae/testimonial</loc> </url>
<url> <loc>https://mahaballoonadventures.ae/en/testimonial</loc> </url>
<url> <loc>https://mahaballoonadventures.ae/ar/testimonial</loc> </url>

<url> <loc>https://mahaballoonadventures.ae/merchandise</loc> </url>
<url> <loc>https://mahaballoonadventures.ae/en/merchandise</loc> </url>
<url> <loc>https://mahaballoonadventures.ae/ar/merchandise</loc> </url>

<url> <loc>https://mahaballoonadventures.ae/blogs</loc> </url>
<url> <loc>https://mahaballoonadventures.ae/en/blogs</loc> </url>
<url> <loc>https://mahaballoonadventures.ae/ar/blogs</loc> </url>


<url> <loc>https://mahaballoonadventures.ae/contact-us</loc> </url>
<url> <loc>https://mahaballoonadventures.ae/en/contact-us</loc> </url>
<url> <loc>https://mahaballoonadventures.ae/ar/contact-us</loc> </url>

<url> <loc>https://mahaballoonadventures.ae/privacy-policy</loc> </url>
<url> <loc>https://mahaballoonadventures.ae/en/privacy-policy</loc> </url>
<url> <loc>https://mahaballoonadventures.ae/ar/privacy-policy</loc> </url>


<url> <loc>https://mahaballoonadventures.ae/terms</loc> </url>
<url> <loc>https://mahaballoonadventures.ae/en/terms</loc> </url>
<url> <loc>https://mahaballoonadventures.ae/ar/terms</loc> </url>


<url> <loc>https://mahaballoonadventures.ae/faqs</loc> </url>
<url> <loc>https://mahaballoonadventures.ae/en/faqs</loc> </url>
<url> <loc>https://mahaballoonadventures.ae/ar/faqs</loc> </url>

<url> <loc>https://mahaballoonadventures.ae/cart</loc> </url>
<url> <loc>https://mahaballoonadventures.ae/en/cart</loc> </url>
<url> <loc>https://mahaballoonadventures.ae/ar/cart</loc> </url>

<url> <loc>https://mahaballoonadventures.ae/compare-packages</loc> </url>
<url> <loc>https://mahaballoonadventures.ae/en/compare-packages</loc> </url>
<url> <loc>https://mahaballoonadventures.ae/ar/compare-packages</loc> </url>

<url> <loc>https://mahaballoonadventures.ae/wishlist</loc> </url>
<url> <loc>https://mahaballoonadventures.ae/en/wishlist</loc> </url>
<url> <loc>https://mahaballoonadventures.ae/ar/wishlist</loc> </url>

<url> <loc>https://mahaballoonadventures.ae/404</loc> </url>


<url> <loc>https://mahaballoonadventures.ae/b2b</loc> </url>
<url> <loc>https://mahaballoonadventures.ae/en/b2b</loc> </url>
<url> <loc>https://mahaballoonadventures.ae/ar/b2b</loc> </url>

<url> <loc>https://mahaballoonadventures.ae/b2c</loc> </url>
<url> <loc>https://mahaballoonadventures.ae/en/b2c</loc> </url>
<url> <loc>https://mahaballoonadventures.ae/ar/b2c</loc> </url>

\n${xmlFiletoWrite?.map((item) => item.replace("&", "&amp;")).join("\n")}

</urlset>

`;
    // console.log("XML :", xmlData);

    fs.writeFile(outputPath, xmlData, (err) => {
      if (err) {
        console.error("Error writing XML file:", err);
      } else {
        console.log("XML file has been created in the public folder.");
      }
    });
  } catch (error) {
    console.error("Error generating sitemap:", error);
  }
};

generateSitemap();
