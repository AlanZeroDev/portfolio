const toggleContact = document.getElementById("toggle-contact");
const contactDetails = document.getElementById("datos-contacto");

toggleContact.addEventListener("click", () => {
  const isHidden = contactDetails.classList.contains("hidden");

  contactDetails.classList.toggle("hidden");
  contactDetails.setAttribute("aria-hidden", String(!isHidden));

  toggleContact.textContent = isHidden ? "Ocultar contacto" : "Contactarme";

  if (isHidden) {
    setTimeout(() => {
      contactDetails.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 120);
  }
});
