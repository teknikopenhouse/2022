// footer.js
document.addEventListener("DOMContentLoaded", function () {
  const footerElement = document.querySelector("navbar-dept");

  fetch("navbar-dept.html")
    .then((response) => response.text())
    .then((data) => {
      footerElement.innerHTML = data;
    });
});
