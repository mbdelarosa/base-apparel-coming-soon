function validateForm(event) {
  let input = document.getElementById("email-address");

  var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (input.value.match(regex)) {
    input.setAttribute("aria-invalid", "false");
  } else {
    input.setAttribute("aria-invalid", "true");
    event.preventDefault();
  }
}

const form = document.getElementById("form");
form.addEventListener("submit", validateForm);