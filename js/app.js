
/* MW AD DOCTOR
   Main Application Controller
*/

document.addEventListener("DOMContentLoaded", () => {
  const navigationButtons = document.querySelectorAll("[data-page]");
  const pages = document.querySelectorAll(".page");

  navigationButtons.forEach(button => {
    button.addEventListener("click", () => {
      const target = button.dataset.page;

      pages.forEach(page => {
        page.classList.toggle("active", page.id === target);
      });

      navigationButtons.forEach(item => {
        item.classList.toggle("active", item === button);
      });
    });
  });

  console.log("MW Ad Doctor initialized successfully.");
});
