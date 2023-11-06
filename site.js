const firstNameInput = document.getElementById("firstNameInput");
const lastNameInput = document.getElementById("lastNameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");

const firstNameError = document.getElementById("firstNameErrorText");
const lastNameError = document.getElementById("lastNameErrorText");
const emailError = document.getElementById("emailErrorText");
const passwordError = document.getElementById("passwordErrorText");

const firstNameErrorImg = document.getElementById("firstNameErrorImg");
const lastNameErrorImg = document.getElementById("lastNameErrorImg");
const emailErrorImg = document.getElementById("emailErrorImg");
const passwordErrorImg = document.getElementById("passwordErrorImg");

const getFreeTrialButton = document.getElementById("bttn");

firstNameInput.addEventListener("input", () => {
  checkFirstName();
});
lastNameInput.addEventListener("input", () => {
  checkLastName();
});
emailInput.addEventListener("input", () => {
  checkEmail();
});
passwordInput.addEventListener("input", () => {
  checkPassword();
});

function checkFirstName() {
  firstNameError.style.display = `none`;
  firstNameErrorImg.style.display = `none`;

  var firstName = firstNameInput.value;
  if (firstName.length == 0 || containsNonAlphabetical(firstName)) {
    firstNameError.style.display = `block`;
    firstNameErrorImg.style.display = `block`;
  }
  if (firstName.length == 0) {
    firstNameError.style.display = `block`;
    firstNameErrorImg.style.display = `block`;
    firstNameError.innerText = "First name cannot be empty";
  } else if (containsNonAlphabetical(firstName)) {
    firstNameError.style.display = `block`;
    firstNameErrorImg.style.display = `block`;
    firstNameError.innerText = "First name cannot contain non alphabetic";
  }
}

function containsNonAlphabetical(str) {
  return /[^a-z A-Z]/.test(str);
}

function checkLastName() {
  lastNameError.style.display = `none`;
  lastNameErrorImg.style.display = `none`;

  var lastName = lastNameInput.value;
  if (lastName.length == 0) {
    lastNameError.style.display = `block`;
    lastNameErrorImg.style.display = `block`;
    lastNameError.innerText = "Last name cannot be empty";
  } else if (containsNonAlphabetical(lastName)) {
    lastNameError.style.display = `block`;
    lastNameErrorImg.style.display = `block`;
    lastNameError.innerText = "Last name cannot contain non alphabetic";
  }
}
function checkEmail() {
  emailError.style.display = `none`;
  emailErrorImg.style.display = `none`;
  emailInput.style.color = `#3D3B48`;

  var email = emailInput.value;
  if (email.length == 0) {
    emailError.style.display = `block`;
    emailErrorImg.style.display = `block`;
    emailInput.style.color = `#FF7979`;
    emailError.innerText = "Email cannot be empty";
  } else if (!isValidEmail(email)) {
    emailError.style.display = `block`;
    emailErrorImg.style.display = `block`;
    emailInput.style.color = `#FF7979`;
    emailError.innerText = "Looks like this is not an email";
  }
}

function isValidEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

function checkPassword() {
  passwordError.style.display = `none`;
  passwordErrorImg.style.display = `none`;
  passwordInput.style.color = `#3D3B48`;

  var password = passwordInput.value;
  if (password.length == 0) {
    passwordError.style.display = `block`;
    passwordErrorImg.style.display = `block`;
    passwordInput.style.color = `#FF7979`;
    passwordError.innerText = "Password cannot be empty";
  } else if (password.length < 8) {
    passwordError.style.display = `block`;
    passwordErrorImg.style.display = `block`;
    passwordInput.style.color = `#FF7979`;
    passwordError.innerText = "Your password should be at least 8 digits";
  }
}

getFreeTrialButton.addEventListener("click", function () {
  checkFirstName();
  checkLastName();
  checkEmail();
  checkPassword();

  ///...
  ///proceedWithSubmit();
});

getFreeTrialButton.addEventListener("mouseenter", function () {
  getFreeTrialButton.style.background = `#77E2B3`;
  getFreeTrialButton.style.cursor = `pointer`;
});
getFreeTrialButton.addEventListener("mouseleave", function () {
  getFreeTrialButton.style.background = `#38CC8B`;
});
