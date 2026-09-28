const createPortfolioCard = (item, kind) => {
  const article = document.createElement("article");
  article.className = "work-card";
  article.dataset.projectKind = kind;

  const link = document.createElement("a");
  link.className = "work-card-link";
  const isDetailPage = location.pathname.split("/").filter(Boolean).length > 1;
  const detailPath = isDetailPage ? `../../${kind}/project/` : "project/";
  link.href = `${detailPath}?slug=${encodeURIComponent(item.slug)}`;
  link.setAttribute("aria-label", `View ${item.title}, ${item.category}`);

  const art = document.createElement("div");
  art.className = "work-art portfolio-art";
  art.style.setProperty("--card-accent", item.accent);
  art.setAttribute("aria-hidden", "true");

  if (item.cover) {
    const cover = document.createElement("img");
    cover.className = "portfolio-card-cover";
    cover.src = item.cover;
    cover.alt = "";
    cover.loading = "lazy";
    art.append(cover);
  }

  const overlay = document.createElement("div");
  overlay.className = "work-card-overlay";

  const heading = document.createElement("h2");
  heading.textContent = item.title;

  const category = document.createElement("span");
  category.className = "work-category";
  category.textContent = item.category;

  overlay.append(heading, category);
  link.append(art, overlay);
  article.append(link);
  return article;
};

document.querySelectorAll("[data-portfolio-list]").forEach((grid) => {
  const kind = grid.dataset.portfolioList;
  (window.portfolioData[kind] || []).forEach((item) => {
    grid.append(createPortfolioCard(item, kind));
  });
});

const relatedGrid = document.querySelector("[data-related-grid]");
if (relatedGrid) {
  const currentSlug = new URLSearchParams(location.search).get("slug");
  const pickRandom = (items) => {
    const candidates = items.filter((item) => item.slug !== currentSlug);
    return candidates[Math.floor(Math.random() * candidates.length)];
  };

  [
    { item: pickRandom(window.portfolioData.work), kind: "work" },
    { item: pickRandom(window.portfolioData.projects), kind: "projects" },
  ].forEach(({ item, kind }) => {
    if (item) relatedGrid.append(createPortfolioCard(item, kind));
  });
}