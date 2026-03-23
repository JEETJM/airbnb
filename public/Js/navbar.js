// document.addEventListener("DOMContentLoaded", () => {
//   const menuBtn = document.getElementById("profileMenuBtn");
//   const dropdown = document.getElementById("profileDropdown");

//   if (menuBtn && dropdown) {
//     menuBtn.addEventListener("click", (e) => {
//       e.stopPropagation();
//       dropdown.classList.toggle("show");
//     });

//     document.addEventListener("click", (e) => {
//       if (!dropdown.contains(e.target) && !menuBtn.contains(e.target)) {
//         dropdown.classList.remove("show");
//       }
//     });
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.querySelector(".theme-icon");
  const themeText = document.querySelector(".theme-text");
  const body = document.body;

  const savedTheme = localStorage.getItem("zenvyra-theme");

  if (savedTheme === "light") {
    body.classList.add("light-mode");
    if (themeIcon) themeIcon.textContent = "☀️";
    if (themeText) themeText.textContent = "Light";
  } else {
    body.classList.remove("light-mode");
    if (themeIcon) themeIcon.textContent = "🌙";
    if (themeText) themeText.textContent = "Dark";
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      body.classList.toggle("light-mode");

      if (body.classList.contains("light-mode")) {
        localStorage.setItem("zenvyra-theme", "light");
        if (themeIcon) themeIcon.textContent = "☀️";
        if (themeText) themeText.textContent = "Light";
      } else {
        localStorage.setItem("zenvyra-theme", "dark");
        if (themeIcon) themeIcon.textContent = "🌙";
        if (themeText) themeText.textContent = "Dark";
      }
    });
  }
});
