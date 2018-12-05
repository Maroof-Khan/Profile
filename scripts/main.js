var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/earth.jpg') {
      myImage.setAttribute ('src','images/help.jpg');
    } else {
      myImage.setAttribute ('src','images/earth.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
myButton.onclick = function() {
  setUserName();
}
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Earth is Beutiful , ' + myName +' Save It';
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Earth is Beutiful, ' + storedName +' Save It';
}
