// ============================================================
// PORTFOLIO DATA
// Add, edit, or delete "work" and "projects" entries below.
// See README.md for a full guide.
// ============================================================

const ACCENTS = ["#c6dd76", "#e79b64", "#8fc5b5", "#e6c8d0", "#a9bbdf", "#d6bf75"];

const slugify = (title) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

// Turns a numbered image folder into a gallery array, e.g. 01.png, 02.png, ...
const numberedGallery = (path, extension, count, title) =>
  Array.from({ length: count }, (_, index) => {
    const number = String(index + 1).padStart(2, "0");
    return { src: `${path}/${number}.${extension}`, alt: `${title}, image ${number}` };
  });

// Fills in slug (from title, unless set explicitly) and a cycling accent color.
const finalize = (entries) =>
  entries.map((entry, index) => ({
    slug: slugify(entry.title),
    accent: ACCENTS[index % ACCENTS.length],
    ...entry,
  }));

// ------------------------------------------------------------
// WORK — client/brand projects. Each entry lists its own gallery
// because images live under assets/work/<folder> with mixed formats.
// ------------------------------------------------------------
const work = [
  {
    title: "Luxury Deals AU",
    slug: "luxury-deals-au",
    category: "Branding",
    scope: "Visual identity, packaging",
    summary: "Your project overview.",
    cover: "/assets/work/luxury-deals-au/06.jpg",
    gallery: [
      { src: "/assets/work/luxury-deals-au/01.gif", alt: "Campaign artwork" },
      { src: "/assets/work/luxury-deals-au/02.webp", alt: "Packaging detail" },
      { src: "/assets/work/luxury-deals-au/03.jpg", alt: "Packaging detail" },
      { src: "/assets/work/luxury-deals-au/04.jpg", alt: "Packaging detail" },
      { src: "/assets/work/luxury-deals-au/05.jpg", alt: "Packaging detail" },
      { src: "/assets/work/luxury-deals-au/06.jpg", alt: "Packaging detail" },
    ],
  },
  {
    title: "Epix",
    category: "Branding",
    scope: "Visual identity",
    summary: "Your project overview.",
    cover: "/assets/work/epix/cover.png",
    gallery: [
      { src: "/assets/work/epix/01.png", alt: "Campaign artwork" },
      { src: "/assets/work/epix/02.gif", alt: "Campaign artwork" },
      { src: "/assets/work/epix/03.png", alt: "Campaign artwork" },
    ],
  },
  {
    title: "Web Gator",
    category: "Branding",
    scope: "Visual identity",
    summary: "Your project overview.",
    cover: "/assets/work/web-gator/cover.png",
    gallery: [
      { src: "/assets/work/web-gator/01.png", alt: "Campaign artwork" },
      { src: "/assets/work/web-gator/02.png", alt: "Campaign artwork" },
      { src: "/assets/work/web-gator/03.png", alt: "Campaign artwork" },
      { src: "/assets/work/web-gator/04.gif", alt: "Campaign artwork" },
      { src: "/assets/work/web-gator/05.gif", alt: "Campaign artwork" },
    ],
  },
  {
    title: "Mental Awareness for Kids",
    category: "Branding",
    scope: "Visual identity, Campaigns",
    summary: "Your project overview.",
    cover: "/assets/work/mental-awareness-for-kids/cover.png",
    gallery: [
      { src: "/assets/work/mental-awareness-for-kids/01.gif", alt: "Campaign artwork" },
      { src: "/assets/work/mental-awareness-for-kids/02.gif", alt: "Campaign artwork" },
      { src: "/assets/work/mental-awareness-for-kids/03.png", alt: "Campaign artwork" },
      { src: "/assets/work/mental-awareness-for-kids/04.png", alt: "Campaign artwork" },
      { src: "/assets/work/mental-awareness-for-kids/05.gif", alt: "Campaign artwork" },
      { src: "/assets/work/mental-awareness-for-kids/06.png", alt: "Campaign artwork" },
      { src: "/assets/work/mental-awareness-for-kids/07.png", alt: "Campaign artwork" },
    ],
  },
  {
    title: "Logofolio-01",
    category: "Branding",
    scope: "Visual identity, Campaigns",
    summary: "Your project overview.",
    cover: "/assets/work/logofolio-01/cover.jpg",
    gallery: [
      { src: "/assets/work/logofolio-01/01.webp", alt: "Campaign artwork" },
      { src: "/assets/work/logofolio-01/02.webp", alt: "Campaign artwork" },
      { src: "/assets/work/logofolio-01/03.webp", alt: "Campaign artwork" },
      { src: "/assets/work/logofolio-01/04.webp", alt: "Campaign artwork" },
      { src: "/assets/work/logofolio-01/05.png", alt: "Campaign artwork" },
      { src: "/assets/work/logofolio-01/06.webp", alt: "Campaign artwork" },
      { src: "/assets/work/logofolio-01/07.png", alt: "Campaign artwork" },
      { src: "/assets/work/logofolio-01/08.webp", alt: "Campaign artwork" },
      { src: "/assets/work/logofolio-01/09.webp", alt: "Campaign artwork" },
      { src: "/assets/work/logofolio-01/10.webp", alt: "Campaign artwork" },
      { src: "/assets/work/logofolio-01/11.webp", alt: "Campaign artwork" },
      { src: "/assets/work/logofolio-01/12.jpg", alt: "Campaign artwork" },
      { src: "/assets/work/logofolio-01/13.png", alt: "Campaign artwork" },
      { src: "/assets/work/logofolio-01/14.png", alt: "Campaign artwork" },
      { src: "/assets/work/logofolio-01/15.png", alt: "Campaign artwork" },
    ],
  },
  {
    title: "CCO",
    category: "Branding",
    scope: "Visual identity",
    summary: "Your project overview.",
    cover: "/assets/work/cco/cover.png",
    gallery: [{ src: "/assets/work/cco/01.png", alt: "Campaign artwork" }],
  },
  {
    title: "A Builders",
    category: "Branding",
    scope: "Visual identity",
    summary: "Your project overview.",
    cover: "/assets/work/a-builders/cover.png",
    gallery: [{ src: "/assets/work/a-builders/01.png", alt: "Campaign artwork" }],
  },
  {
    title: "Naval Logistics",
    category: "Branding",
    scope: "Visual identity",
    summary: "Your project overview.",
    cover: "/assets/work/naval-logistics/cover.png",
    gallery: [{ src: "/assets/work/naval-logistics/01.png", alt: "Campaign artwork" }],
  },
  {
    title: "All Sail",
    category: "Branding",
    scope: "Visual identity",
    summary: "Your project overview.",
    cover: "/assets/work/all-sail/cover.png",
    gallery: [
      { src: "/assets/work/all-sail/01.png", alt: "Campaign artwork" },
      { src: "/assets/work/all-sail/02.png", alt: "Campaign artwork" },
      { src: "/assets/work/all-sail/03.png", alt: "Campaign artwork" },
    ],
  },
  {
    title: "Nimisski",
    category: "Branding",
    scope: "Visual identity",
    summary: "Your project overview.",
    cover: "/assets/work/nimisski/cover.png",
    gallery: [{ src: "/assets/work/nimisski/01.png", alt: "Campaign artwork" }],
  },
  {
    title: "A & S Web Design",
    slug: "as-webdesign",
    category: "Branding",
    scope: "Visual identity",
    summary: "Your project overview.",
    cover: "/assets/work/as-webdesign/cover.png",
    gallery: [{ src: "/assets/work/as-webdesign/01.png", alt: "Campaign artwork" }],
  },
  {
    title: "Merch Collection for a Brand",
    slug: "merch-collection-spring",
    category: "Branding",
    scope: "Visual identity",
    summary: "Your project overview.",
    cover: "/assets/work/merch-collection-spring/cover.png",
    gallery: [
      { src: "/assets/work/merch-collection-spring/01.png", alt: "Campaign artwork" },
      { src: "/assets/work/merch-collection-spring/02.png", alt: "Campaign artwork" },
      { src: "/assets/work/merch-collection-spring/03.png", alt: "Campaign artwork" },
      { src: "/assets/work/merch-collection-spring/04.png", alt: "Campaign artwork" },
      { src: "/assets/work/merch-collection-spring/05.png", alt: "Campaign artwork" },
    ],
  },
  {
    title: "Look Book Design for a Brand",
    slug: "look-book-design",
    category: "Branding",
    scope: "Visual identity",
    summary: "Your project overview.",
    cover: "/assets/work/look-book-design/cover.jpg",
    gallery: [
      { src: "/assets/work/look-book-design/01.jpg", alt: "Campaign artwork" },
      { src: "/assets/work/look-book-design/02.jpg", alt: "Campaign artwork" },
      { src: "/assets/work/look-book-design/03.jpg", alt: "Campaign artwork" },
    ],
  },
];

// ------------------------------------------------------------
// PROJECTS — concept work. Images are numbered sequentially under
// assets/projects/<folder>, so the gallery is generated from count/extension.
// ------------------------------------------------------------
const projectSpecs = [
  { title: "Neo Medieval Interior Design Concept", folder: "neo-medieval", extension: "png", count: 4 },
  { title: "Gel Product Packaging", folder: "gel-product-packaging", extension: "png", count: 4 },
  { title: "Serum Bottle", folder: "serum-bottle", extension: "png", count: 6 },
  { title: "Defined", folder: "defined", extension: "jpg", count: 27 },
  { title: "Vitamin Bottle", folder: "vitamin-bottle", extension: "png", count: 3 },
  { title: "Present Moment", folder: "present-moment", extension: "jpg", count: 1 },
  { title: "Nikon Film Camera", folder: "nikon-film-camera", extension: "png", count: 5 },
  { title: "Vinyl Record", folder: "vinyl-record", extension: "png", count: 4 },
  { title: "Telecaster", folder: "telecaster", extension: "png", count: 7 },
  { title: "Stratocaster", folder: "stratocaster", extension: "png", count: 10 },
  { title: "Steadfast", folder: "steadfast", extension: "png", count: 8 },
  { title: "Tested Combat Club", folder: "tested-combat-club", extension: "png", count: 12 },
  { title: "Chillin Summer Collection", folder: "chillin-summer", extension: "png", count: 4 },
];

const projects = projectSpecs.map(({ title, folder, extension, count }) => {
  const path = `/assets/projects/${folder}`;
  return {
    title,
    category: "Concept Project",
    scope: "Concept development, art direction, visual design",
    summary: "",
    cover: `${path}/cover.${extension}`,
    gallery: [
      { src: `${path}/cover.${extension}`, alt: `${title} cover` },
      ...numberedGallery(path, extension, count, title),
    ],
  };
});

window.portfolioData = {
  work: finalize(work),
  projects: finalize(projects),
};