
document.getElementById("year").textContent = new Date().getFullYear();

const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");

// Mobile navigation toggle
toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");

  toggle.setAttribute("aria-expanded", String(open));
});

// Close navigation after clicking a menu link
links.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    links.classList.remove("open");

    toggle.setAttribute("aria-expanded", "false");
  });
});
