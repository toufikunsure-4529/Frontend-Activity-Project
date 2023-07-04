

function login() {
  var errorElement = document.getElementById("error");
  var password = document.getElementById("password").value;
  var correctPassword = "Password@1234";
  if(password === correctPassword) {
        // window.location.href = "home.html";
      var url = "home.html?message=success";
      window.location.href = url;

      return false;    
  }
else {
  errorElement.textContent = "Incorrect password. Please try again.";

  return false; // Prevent form submission
}
}

let day=new Date();
let hr=day.getHours();
if(hr>=0 && hr<12){
 document.getElementById('wish-time').innerHTML="Good Morning!";
}
else if(hr==12){
 document.getElementById('wish-time').innerHTML="Good Noon!";

}
else if(hr>=12&&hr<=17){
 document.getElementById('wish-time').innerHTML="Good Afternoon!";

}
else{
 document.getElementById('wish-time').innerHTML="Good Evening!";

}  

document.addEventListener("DOMContentLoaded", function() {
  var currentIPEl = document.getElementById("currentIP");

  // Make an HTTP request to the ipify API
  var request = new XMLHttpRequest();
  request.open("GET", "https://api.ipify.org?format=json", true);
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      var response = JSON.parse(request.responseText);
      var currentIP = response.ip;
      currentIPEl.textContent = "IP Address: " + currentIP;
    } else {
      currentIPEl.textContent = "Failed to retrieve IP address.";
    }
  };
  request.onerror = function() {
    currentIPEl.textContent = "Failed to retrieve IP address.";
  };
  request.send();
});



function copyUsername() {
  var usernameInput = document.getElementById("usernameInput");
  var username = usernameInput.value;

  // Encode the username to handle special characters in the URL
  var encodedUsername = encodeURIComponent(username);

  // Redirect to the next page with the username as a parameter
  window.location.href = "next-page.html?username=" + encodedUsername;
}

