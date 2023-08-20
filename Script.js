 function login() {
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;
      var loginMessage = document.getElementById("loginMessage");
      
      // In a real application, you would send the username and password to a server for verification.
      // This is a simple example, so we'll just check for a hardcoded username and password.
      if (username === "user" && password === "password") {
        loginMessage.textContent = "Login successful!";
      } else {
        loginMessage.textContent = "Login failed. Please check your username and password.";
      }
    }
