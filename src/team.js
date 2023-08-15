var loadFile = function (event) {
  var reader = new FileReader();
  reader.onload = function () {
    var output = document.getElementById('output');
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
};

var uploadField = document.getElementById("myFile");

uploadField.onchange = function () {
  if (this.files[0].size > 300000) {
    alert("File is too big Please Upload lesthan 300kb!");
    this.value = "";
  };
};



