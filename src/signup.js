const name = document.getElementById('name')
const usernameInput = document.getElementById("usernameInput")
const submitButton = document.getElementById('submitButton');
const pw = "Password@1234"
submitButton.addEventListener("click", showMsg) // button click Event listeaner

// //show alert function
function showMsg() {
  const userName = name.value;
  const userEmail = usernameInput.value;
  //User Input Must be Enter Code
  if (userName.trim() == '') {
    const userConfirmed = confirm(confirmMessage);
    if (userConfirmed) {
      displayArea.textContent = `You entered: ${item}`;
    }
  }
  //After Submit Button Then show Function alert code 
  const userConfirmed = confirm("Are Sure Correct data Input")
  if (userConfirmed === true) {
    alert(userName + " Your User Name is " + userEmail + " Password is-" + pw)
  }
  else {
    alert("Please Check Your data and Resubmit Thank You! " + userName)
  }
}





