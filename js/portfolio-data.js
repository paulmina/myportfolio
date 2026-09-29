const makeEntries = (titles, category, scope) => titles.map((title, index) => ({
  title,
  slug: title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
  category,
  scope,
  summary: "Project story and details can be added here when this portfolio entry is ready.",
  gallery: [],
  accent: ["#c6dd76", "#e79b64", "#8fc5b5", "#e6c8d0", "#a9bbdf", "#d6bf75"][index % 6],
}));

window.portfolioData = {
  work: makeEntries([
    "Luxury AU",
    "Epix",
    "Webgator",
    "Mental Awareness for Kids",
    "Logofolio",
    "CCO",
    "A Builders",
    "Naval Logistics",
    "2023 Portfolio",
    "All Sail",
    "Nimisski",
    "A Web Design",
    "Web Designs",
    "Merch Collection for a Brand",
    "Look Book Design for a Brand",
    "Social Media Post",
    "EMD",
  ], "Selected Work", "Project scope to be added"),
  projects: makeEntries([
    "Neo Medieval Interior Design Concept",
    "Gel Product Packaging",
    "Serum Bottle",
    "Defined",
    "Vitamin Bottle",
    "Present Moment",
    "Nikon Film Camera",
    "Vinyl Record",
    "Telecaster",
    "Stratocaster",
    "Steadfsat",
    "Tested Combat Club",
    "Chillin Summer Collection",
    "Motion Graphics",
    "Illustrations",
    "Innkeat V",
  ], "Concept Project", "Concept development, art direction, visual design"),
};

Object.assign(window.portfolioData.work[0], {
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
});

Object.assign(window.portfolioData.work[1], {
  title: "Epix",
  slug: "epix",
  category: "Branding",
  scope: "Visual identity",
  summary: "Your project overview.",
  cover: "/assets/work/epix/cover.png",
  gallery: [
    { src: "/assets/work/epix/01.png", alt: "Campaign artwork" },
    { src: "/assets/work/epix/02.gif", alt: "Campaign artwork" },
    { src: "/assets/work/epix/03.png", alt: "Campaign artwork" },
  ],
});

Object.assign(window.portfolioData.work[2], {
  title: "Web Gator",
  slug: "web-gator",
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
});

Object.assign(window.portfolioData.work[3], {
  title: "Mental Awareness for Kids",
  slug: "mental-awareness-for-kids",
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
});

Object.assign(window.portfolioData.work[4], {
  title: "Logofolio-01",
  slug: "logofolio-01",
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
});

Object.assign(window.portfolioData.work[5], {
  title: "CCO",
  slug: "cco",
  category: "Branding",
  scope: "Visual identity",
  summary: "Your project overview.",
  cover: "/assets/work/cco/cover.png",
  gallery: [
    { src: "/assets/work/cco/01.png", alt: "Campaign artwork" },

  ],
});

Object.assign(window.portfolioData.work[6], {
  title: "A Builders",
  slug: "a-builders",
  category: "Branding",
  scope: "Visual identity",
  summary: "Your project overview.",
  cover: "/assets/work/a-builders/cover.png",
  gallery: [
    { src: "/assets/work/a-builders/01.png", alt: "Campaign artwork" },

  ],
});

Object.assign(window.portfolioData.work[7], {
  title: "Naval Logistics",
  slug: "naval-logistics",
  category: "Branding",
  scope: "Visual identity",
  summary: "Your project overview.",
  cover: "/assets/work/naval-logistics/cover.png",
  gallery: [
    { src: "/assets/work/naval-logistics/01.png", alt: "Campaign artwork" },

  ],
});

Object.assign(window.portfolioData.work[8], {
  title: "All Sail",
  slug: "all-sail",
  category: "Branding",
  scope: "Visual identity",
  summary: "Your project overview.",
  cover: "/assets/work/all-sail/cover.png",
  gallery: [
      { src: "/assets/work/all-sail/01.png", alt: "Campaign artwork" },
      { src: "/assets/work/all-sail/02.png", alt: "Campaign artwork" },
      { src: "/assets/work/all-sail/03.png", alt: "Campaign artwork" },
  ],
});


Object.assign(window.portfolioData.work[9], {
  title: "Nimisski",
  slug: "nimisski",
  category: "Branding",
  scope: "Visual identity",
  summary: "Your project overview.",
  cover: "/assets/work/nimisski/cover.png",
  gallery: [
      { src: "/assets/work/nimisski/01.png", alt: "Campaign artwork" },
  ],
});
