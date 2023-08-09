// footer.js
document.addEventListener("DOMContentLoaded", function () {
  const footerElement = document.querySelector("footer");

  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      footerElement.innerHTML = data;
    });
});
