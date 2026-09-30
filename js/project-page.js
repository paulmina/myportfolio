// PROJECT_KIND and PAGE_DEPTH are declared inline in each detail page's HTML.
const projectKind = window.PROJECT_KIND || "work";
const ROOT = "../".repeat(window.PAGE_DEPTH || 0);
const projectSlug = new URLSearchParams(location.search).get("slug");
const project = (window.portfolioData[projectKind] || []).find((item) => item.slug === projectSlug);
const detail = document.querySelector("[data-project-detail]");

if (project && detail) {
  document.title = `${project.title} | John Paul Mina`;
  detail.querySelector("[data-project-title]").textContent = project.title;
  detail.querySelectorAll("[data-project-category]").forEach((node) => {
    node.textContent = project.category;
  });
  const summary = detail.querySelector("[data-project-summary]");
  summary.textContent = project.summary;
  summary.hidden = !project.summary;
  detail.querySelector("[data-project-scope]").textContent = project.scope;

  const gallery = detail.querySelector("[data-project-gallery]");
  const galleryItems = project.gallery || [];

  galleryItems.forEach((item) => {
    const figure = document.createElement("figure");
    const image = document.createElement("img");
    image.src = ROOT + item.src;
    image.alt = item.alt || `${project.title} project image`;
    image.loading = "lazy";
    figure.append(image);
    gallery.append(figure);
  });
} else if (detail) {
  detail.innerHTML = "<h1>Project not found</h1><p>Choose another project from the portfolio.</p>";
}