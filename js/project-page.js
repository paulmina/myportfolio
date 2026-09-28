const routeParts = location.pathname.split("/").filter(Boolean);
const projectKind = routeParts[0] === "projects" ? "projects" : "work";
const projectSlug = new URLSearchParams(location.search).get("slug");
const project = (window.portfolioData[projectKind] || []).find((item) => item.slug === projectSlug);
const detail = document.querySelector("[data-project-detail]");

if (project && detail) {
  document.title = `${project.title} | John Paul Mina`;
  detail.querySelector("[data-project-title]").textContent = project.title;
  detail.querySelectorAll("[data-project-category]").forEach((node) => {
    node.textContent = project.category;
  });
  detail.querySelector("[data-project-summary]").textContent = project.summary;
  detail.querySelector("[data-project-scope]").textContent = project.scope;

  const gallery = detail.querySelector("[data-project-gallery]");
  const galleryItems = project.gallery.length
    ? project.gallery
    : Array.from({ length: 4 }, (_, index) => ({
        src: `https://placehold.co/1600x1200/${project.accent.slice(1)}/171717?text=${encodeURIComponent(`${project.title} / Image ${index + 1}`)}`,
        alt: `${project.title}, gallery placeholder ${index + 1}`,
      }));

  galleryItems.forEach((item) => {
    const figure = document.createElement("figure");
    const image = document.createElement("img");
    image.src = item.src;
    image.alt = item.alt || `${project.title} project image`;
    image.loading = "lazy";
    figure.append(image);
    gallery.append(figure);
  });
} else if (detail) {
  detail.innerHTML = "<h1>Project not found</h1><p>Choose another project from the portfolio.</p>";
}