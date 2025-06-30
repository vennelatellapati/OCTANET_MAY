document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const msg = document.getElementById("form-msg");

  if (email.includes("@") && email.includes(".")) {
    msg.style.color = "green";
    msg.textContent = "Thanks for signing up! We'll be in touch.";
    this.reset();
  } else {
    msg.style.color = "red";
    msg.textContent = "Please enter a valid email address.";
  }
});
