let name = document.getElementById('name')
let usernameInput = document.getElementById("usernameInput")
let btn = document.querySelector('button')
btn.addEventListener("click", showMsg)
let pw = "Password@123"

//show alert function
function showMsg() {
  alert(name + " Your User Name is " + usernameInput + " Password is-" + pw)
}

