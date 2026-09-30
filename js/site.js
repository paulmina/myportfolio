const themeToggle = document.querySelector(".theme-toggle");
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-links-right");
const contactForm = document.querySelector("#contact-form");

const applyTheme = (theme) => {
  document.documentElement.dataset.theme = theme;
  if (themeToggle) {
    const isLight = theme === "light";
    themeToggle.setAttribute("aria-pressed", String(isLight));
    themeToggle.setAttribute(
      "aria-label",
      `Switch to ${isLight ? "dark" : "light"} mode`
    );
  }
};

let savedTheme = "dark";
try {
  savedTheme = localStorage.getItem("portfolio-theme") || "dark";
} catch {}
applyTheme(savedTheme);

themeToggle?.addEventListener("click", () => {
  const theme = document.documentElement.dataset.theme === "light" ? "dark" : "light";
  applyTheme(theme);
  try {
    localStorage.setItem("portfolio-theme", theme);
  } catch {}
});

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Open menu" : "Close menu");
  navMenu?.classList.toggle("is-open", !isOpen);
});

contactForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const submitButton = contactForm.querySelector("[type=submit]");
  const feedback = document.querySelector("#contact-feedback");
  const successMessage = document.querySelector("#contact-success");
  submitButton.disabled = true;
  submitButton.textContent = "Sending...";
  feedback.textContent = "";

  try {
    const response = await fetch(contactForm.action, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Object.fromEntries(new FormData(contactForm))),
    });
    const result = await response.json();

    if (!response.ok || String(result.success).toLowerCase() !== "true") {
      throw new Error("Contact form submission failed");
    }

    contactForm.hidden = true;
    successMessage.hidden = false;
  } catch {
    feedback.textContent = "Your message could not be sent. Please try again shortly.";
    submitButton.disabled = false;
    submitButton.textContent = "Submit";
  }
});