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




// Get the URL parameters
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString,window.location.search);
var errorElement = document.getElementById("successMessage");

// Check if the "message" parameter is present and has a value of "success"
if (urlParams.has("message") && urlParams.get("message") === "success") {
  // Display success message
  var errorElement = document.getElementById("successMessage");
  errorElement.textContent = " Logged succesfully ";
  

   setTimeout(function() {
    errorElement.textContent = "";
  }, 2000);
}

window.addEventListener("DOMContentLoaded", function() {
  var usernameDisplay = document.getElementById("usernameDisplay");
  var urlParams = new URLSearchParams(window.location.search);
  var storedUsername = urlParams.get("username");

  if (storedUsername) {
    // Decode the username to display it properly
    var decodedUsername = decodeURIComponent(storedUsername);
    usernameDisplay.textContent = decodedUsername;
  } else {
    usernameDisplay.textContent = "No username found.";
  }
});






