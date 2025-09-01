// Simple form validation
const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("✅ Thank you for reaching out! I will get back to you soon.");
  form.reset();
});
 