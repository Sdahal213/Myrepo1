
function validateForm() {
  if(document.myForm.name.value==""){
  	alert("Please provide name");
  document.myForm.name.focus();
  return false;
  }
  	

  if(document.myForm.email.value==""){
  	alert("Please provide email");
  document.myForm.email.focus();
  return false;
  }
  	

if(document.myForm.phone.value==""){
	alert("Please provide phone number");
  document.myForm.phone.focus();
  return false;
}
  	

  if(document.myForm.subject.value==""){
  	alert("Please provide subject");
  document.myForm.subject.focus();
  return false;
  }
  	

  if(document.myForm.message.value==""){
  	alert("Please provide message");
  document.myForm.message.focus();
  return false;
  }
  	
}