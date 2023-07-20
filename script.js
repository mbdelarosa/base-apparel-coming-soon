function validateForm(event) {
  const input = document.getElementById("email-address");
  const error = document.getElementById("email-error");
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (!input.value.match(regex)) {
    input.setAttribute("aria-invalid", "true");
    error.textContent = "Please provide a valid email";
    event.preventDefault();
  }
}

const form = document.getElementById("form");
form.addEventListener("submit", validateForm);