function validateForm() {
  for (var i = 0; i < myForm.elements.length; i++) {
    if (myForm.elements[i].className == 'req' && myForm.elements[i].value.length == 0) {
      alert('Please complete all fields.');
      return false;
    }
  }

  var email = document.getElementById('email').value;
  var atpos = email.indexOf('@');
  var dotpos = email.lastIndexOf('.');
  if (atpos < 1 || dotpos < atpos+2 || dotpos+2 >= x.length) {
    alert('Please enter a valid email address.');
  }
}
