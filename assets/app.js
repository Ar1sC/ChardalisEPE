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

const greekPhonePattern = /^(?:69\d{8}|2\d{9}|\+3069\d{8}|003069\d{8}|\+302\d{9}|00302\d{9})$/;
const normalizePhone = (value) => value.replace(/[\s().-]/g, "");
const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());

const contactForm = document.querySelector("[data-contact-form]");
if (contactForm) {
  const phoneInput = contactForm.querySelector('input[name="phone"]');
  const emailInput = contactForm.querySelector('input[name="email"]');
  const messageInput = contactForm.querySelector('textarea[name="message"]');

  phoneInput?.addEventListener("input", () => {
    phoneInput.setCustomValidity("");
  });

  emailInput?.addEventListener("input", () => {
    emailInput.setCustomValidity("");
  });

  messageInput?.addEventListener("input", () => {
    messageInput.setCustomValidity("");
  });

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const status = contactForm.querySelector(".status-message");
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const defaultButtonText = submitButton?.textContent || "Αποστολή Μηνύματος";
    const accessKey = contactForm.querySelector('input[name="access_key"]')?.value;

    if (phoneInput) {
      phoneInput.value = normalizePhone(phoneInput.value);
      if (!greekPhonePattern.test(phoneInput.value)) {
        phoneInput.setCustomValidity("Βάλτε έγκυρο ελληνικό τηλέφωνο, π.χ. 6944245218, 2310000000 ή +306944245218.");
      }
    }

    if (emailInput && !isValidEmail(emailInput.value)) {
      emailInput.setCustomValidity("Βάλτε έγκυρο email, π.χ. name@example.com.");
    }

    if (messageInput && messageInput.value.trim().length < 10) {
      messageInput.setCustomValidity("Γράψτε λίγες περισσότερες πληροφορίες για το αίτημά σας.");
    }

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
