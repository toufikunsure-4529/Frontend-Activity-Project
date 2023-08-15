// const name = document.getElementById('name')
// const usernameInput = document.getElementById("usernameInput")
// const submitButton = document.getElementById('submitButton');
// const pw = "Password@1234"
// submitButton.addEventListener("click", showMsg) // button click Event listeaner

// // //show alert function
// function showMsg() {
//   const userName = name.value;
//   const userEmail = usernameInput.value;
//   //User Input Must be Enter Code
//   if (userName.trim() == '') {
//     const userConfirmed = confirm(confirmMessage);
//     if (userConfirmed) {
//       displayArea.textContent = `You entered: ${item}`;
//     }
//   }
//   //After Submit Button Then show Function alert code 
//   const userConfirmed = confirm("Are Sure Correct data Input")
//   if (userConfirmed === true) {
//     alert(userName + " Your User Name is " + userEmail + " Password is-" + pw)
//   }
//   else {
//     alert("Please Check Your data and Resubmit Thank You! " + userName)
//   }
// }

// live date capture
var pww = document.getElementById("pw");
let num = new Date()
pww.textContent = num;


// wish day function
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



// live ip adress capture function
document.addEventListener("DOMContentLoaded", function () {
  var currentIPEl = document.getElementById("currentIP");
  // Make an HTTP request to the ipify API
  var request = new XMLHttpRequest();
  request.open("GET", "https://api.ipify.org?format=json", true);
  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      var response = JSON.parse(request.responseText);
      var currentIP = response.ip;
      currentIPEl.textContent = "IP Address: " + currentIP;
    } else {
      currentIPEl.textContent = "Failed to retrieve IP address.";
    }
  };
  request.onerror = function () {
    currentIPEl.textContent = "Failed to retrieve IP address.";
  };
  request.send();
});








