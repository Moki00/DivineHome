// Smooth Scroll for Navigation
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Simple form alert
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for reaching out! We will get back to you shortly.");
});
