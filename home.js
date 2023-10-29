let timeout; // Declare a timeout variable

function logout() {
  // Clear the authentication and session expiration cookies
  document.cookie =
    "authenticated=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie =
    "sessionExpired=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  clearTimeout(timeout); // Clear the session timeout
  window.location.href = "index.html"; // Redirect to the login page
}

function checkAuthentication() {
  const cookies = document.cookie.split(";");
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split("=");
    if (name === "authenticated" && value === "true") {
      // Set a session timeout for 30 minutes
      timeout = setTimeout(() => {
        // Set a session expiration cookie
        document.cookie = "sessionExpired=true; path=/";
        window.location.href = "index.html"; // Redirect to the login page
      }, 30 * 60 * 1000); // 30 minutes in milliseconds
      return;
    }
  }
  // If the authentication cookie is not found, or if the session has expired, redirect to the login page
  window.location.href = "index.html";
}
checkAuthentication();
