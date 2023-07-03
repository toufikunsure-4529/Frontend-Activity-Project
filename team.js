var loadFile = function(event) {
  var image = document.getElementById('output');
  image.src = URL.createObjectURL(event.target.files[0]);
};

var uploadField = document.getElementById("myFile");

uploadField.onchange = function() {
if(this.files[0].size > 300000){
   alert("File is too big Please Upload lesthan 300kb!");
   this.value = "";
};
};


