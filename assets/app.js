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
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const status = contactForm.querySelector(".status-message");
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const defaultButtonText = submitButton?.textContent || "Αποστολή Μηνύματος";
    const accessKey = contactForm.querySelector('input[name="access_key"]')?.value;

    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    if (status) {
      status.textContent = "";
      status.classList.remove("is-success", "is-error");
    }

    if (!accessKey || accessKey === "YOUR_WEB3FORMS_ACCESS_KEY" || accessKey === "REPLACE_WITH_WEB3FORMS_ACCESS_KEY") {
      if (status) {
        status.textContent = "Η φόρμα δεν έχει ενεργοποιηθεί ακόμη. Παρακαλούμε καλέστε ή στείλτε email.";
        status.classList.add("is-error");
      }
      return;
    }

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Αποστολή...";
    }

    try {
      const formData = new FormData(contactForm);
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Form submission failed");
      }

      contactForm.reset();
      if (status) {
        status.textContent = "Ευχαριστούμε. Το μήνυμά σας στάλθηκε και θα επικοινωνήσουμε μαζί σας σύντομα.";
        status.classList.add("is-success");
      }
    } catch (error) {
      if (status) {
        status.textContent = "Δεν ήταν δυνατή η αποστολή. Παρακαλούμε δοκιμάστε ξανά ή καλέστε μας.";
        status.classList.add("is-error");
      }
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = defaultButtonText;
      }
    }
  });
}
