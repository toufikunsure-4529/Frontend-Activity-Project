let day = new Date();
let hr = day.getHours();
if (hr >= 0 && hr < 12) {
  document.getElementById('wish-time').innerHTML = "Good Morning!";
}
else if (hr == 12) {
  document.getElementById('wish-time').innerHTML = "Good Noon!";

}
else if (hr >= 12 && hr <= 17) {
  document.getElementById('wish-time').innerHTML = "Good Afternoon!";

}
else {
  document.getElementById('wish-time').innerHTML = "Good Evening!";

}


// Check for the message query parameter in the URL
var urlParams = new URLSearchParams(window.location.search);
if (urlParams.has("message")) {
  var message = urlParams.get("message");
  if (message === "success") {
    // Display the success message (you can modify this part)
    var successMessageElement = document.getElementById("successMessage");
    successMessageElement.textContent = " Login successful! ";
    
    // Remove the message query parameter from the URL
    history.replaceState({}, document.title, "/public/home.html");
  }
  setTimeout(function () {
    successMessageElement.textContent = "";
  }, 2000);
}






// Make mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});



