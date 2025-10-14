function validateForm() {
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const result = document.getElementById("result");

  // Empty field check
  if (!username || !email || !phone || !password || !confirmPassword) {
    alert("All fields are required!");
    return false;
  }

  // Phone validation (only numbers, 10 digits)
  const phonePattern = /^[0-9]{10}$/;
  if (!phonePattern.test(phone)) {
    alert("Phone number must be 10 digits!");
    return false;
  }

  // Email validation (regex)
  const emailPattern = /^[a-zA-Z0-9._]+@[a-zA-Z]{3,}\.[a-zA-Z]{2,3}$/;
  if (!emailPattern.test(email)) {
    alert("Invalid email format!");
    return false;
  }

  // Password validation (min 7 chars, 1 uppercase, 1 digit, 1 special char)
  const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[&$#@]).{7,}$/;
  if (!passwordPattern.test(password)) {
    alert("Password must be at least 7 chars, include a capital letter, a digit, and a special char (&,$,#,@).");
    return false;
  }

  // Confirm password match
  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return false;
  }

  // If everything is valid
  result.textContent = "Registration Successful for Roll No 38!";
  return false; // Prevent actual form submission for demo
}
