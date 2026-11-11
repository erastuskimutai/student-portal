/* ===== QUESTION FIVE ===== */

// (a) Variables and console.log()
let studentName = "Amina Hassan";
let registrationNumber = "CS/2024/001";
let academicProgramme = "Computer Science";

console.log("Student Name: " + studentName);
console.log("Registration Number: " + registrationNumber);
console.log("Academic Programme: " + academicProgramme);

// (b) Grade calculator
function calculateGrade(score) {
  if (score >= 70 && score <= 100) {
    return "A";
  } else if (score >= 60) {
    return "B";
  } else if (score >= 50) {
    return "C";
  } else if (score >= 40) {
    return "D";
  } else {
    return "E";
  }
}

// (c) Call with 75 and show result in alert()
let grade = calculateGrade(75);
alert("Grade for a score of 75: " + grade);


/* ===== QUESTION SIX & SEVEN ===== */

// Q6(a): Retrieve the form using the DOM
const form = document.getElementById("registrationForm");
const output = document.getElementById("output");

// Helper: show or clear an error message
function setError(inputId, errorId, message) {
  document.getElementById(errorId).textContent = message;
  document.getElementById(inputId).classList.toggle("invalid", message !== "");
}

// Q7(b): Email format check
function isValidEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

// Q6(b): Event listener for form submission
form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop page reload

  const name = document.getElementById("fullName").value.trim();
  const regNo = document.getElementById("regNo").value.trim();
  const email = document.getElementById("email").value.trim();

  let valid = true;

  // Q7(a): Name and registration number must not be empty
  if (name === "") {
    setError("fullName", "nameError", "Full name is required.");
    valid = false;
  } else {
    setError("fullName", "nameError", "");
  }

  if (regNo === "") {
    setError("regNo", "regError", "Registration number is required.");
    valid = false;
  } else {
    setError("regNo", "regError", "");
  }

  // Q7(b): Email validation
  if (email === "") {
    setError("email", "emailError", "Email address is required.");
    valid = false;
  } else if (!isValidEmail(email)) {
    setError("email", "emailError", "Enter a valid email, e.g. name@example.com.");
    valid = false;
  } else {
    setError("email", "emailError", "");
  }

  if (!valid) {
    output.innerHTML = "";
    return;
  }

  // Q6(c) and (d): Display details and success message
  output.innerHTML =
    '<div class="success">' +
    "<strong>Registration successful!</strong><br>" +
    "Name: " + name + "<br>" +
    "Registration Number: " + regNo +
    "</div>";
});

// Clear messages when the form is reset
form.addEventListener("reset", function () {
  output.innerHTML = "";
  setError("fullName", "nameError", "");
  setError("regNo", "regError", "");
  setError("email", "emailError", "");
});
