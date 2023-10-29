document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "rohit" && password === "123") {
    // Set a cookie to store the user's authentication state
    document.cookie = "authenticated=true; path=/";
    window.location.href = "home.html"; // Redirect to the home page
  } else {
    document.getElementById("error").textContent =
      "Invalid username or password.";
  }
});
