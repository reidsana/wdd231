const modalLinks = document.querySelectorAll('a[href^="#"]');
const closeButtons = document.querySelectorAll(".close-modal");

modalLinks.forEach(link => {
  link.addEventListener("click", event => {
    const modalId = link.getAttribute("href");
    const modal = document.querySelector(modalId);
    if (modal) {
      modal.showModal();
    }
  });
});

closeButtons.forEach(button => {
  button.addEventListener("click", () => {
    button.closest("dialog").close();
  });
});
