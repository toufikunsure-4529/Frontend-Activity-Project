// live date capture
var pww = document.getElementById("pw");
let num = new Date()
pww.textContent = num;

// login paassword validation function
function login() {
  var errorElement = document.getElementById("error");
  var password = document.getElementById("password").value;
  var correctPassword = "Password@1234";
  if (password === correctPassword) {
    setTimeout(()=>{
      var url = "/public/home.html?message=success";
      window.location.href = url;
    },2000)
    let btn = document.getElementById('btn');
    btn.disabled = true;
    btn.innerText = 'Posting...'
    return false;
  }
  

  else {
    errorElement.textContent = "Incorrect password. Please try again.";
    return false; // Prevent form submission
  }
  
}





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


/* cursol animation after page loaded */
document.addEventListener("DOMContentLoaded",function(){
  const loadingAnimation=document.getElementById("loading-animation")
  const contentPlaceholder=document.getElementById("content-placeholder")

      // Simulate a delay for demonstration purposes
  setTimeout(function(){
    loadingAnimation.style.display="none"
    contentPlaceholder.style.display="block"
    function loadContent(){
      const newElement=document.createElement("p")
      contentPlaceholder.appendChild(newElement)
    }
            // Call the loadContent function to load dynamic content
    loadContent();
  },2000) // Simulating a 2-second delay, adjust as needed
})



// ====Error Showing Web page {Error Handelling} Call back=====

function scriptLoaded(src,callback){
let script=document.createElement("script")
script.src=src;
script.onload=(()=>{
  // console.log("Script Loaded!");
  callback(null,src);
});

script.onerror=(()=>{
  callback(new Error("Page Not Available at the moment due to maintenance...."))
})
document.body.append(script)
}


function callback(error){
  if(error){
    document.write(error)
  }
  console.log("Script Loaded")
}


// scriptLoaded("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js",callback)



// password.addEventListener("keyup", function(event) {

//   if (event.getModifierState("CapsLock")) {
//       text.style.display = "block";
//     } else {
//       text.style.display = "none"
//     }
//   });


function myFunction() {
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
}