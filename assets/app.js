const body = document.body;
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".nav-links a");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    const isOpen = body.classList.toggle("menu-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    body.classList.remove("menu-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll(".faq-button").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    if (!item) return;
    item.toggleAttribute("open");
    button.setAttribute("aria-expanded", String(item.hasAttribute("open")));
  });
});

const contactForm = document.querySelector("[data-contact-form]");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = contactForm.querySelector(".status-message");
    if (status) {
      status.textContent = "Ευχαριστούμε. Θα επικοινωνήσουμε μαζί σας για το επόμενο βήμα.";
    }
  });
}
