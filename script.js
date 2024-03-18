// Ready to be scripted!
const userPassword = document.getElementById("user-password");
const confirmPassword = document.getElementById("confirm-password");
const signupForm = document.getElementById("signupForm");
const message = document.getElementById("message");

confirmPassword.onkeyup = function () {
  if (confirmPassword.value == userPassword.value) {
    // Style the boxes to show they don't match
    confirmPassword.style.outline = "2px solid green";
    message.textContent = "Matching";
  } else if (confirmPassword.value != userPassword.value) {
    confirmPassword.style.outline = "2px solid red";
    message.textContent = "Not Matching";
  }
};

signupForm.onsubmit = function () {
  if (confirmPassword.value != userPassword.value) {
    alert("Passwords must match!");
    return false;
  }
  return true;
};
