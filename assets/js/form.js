




function formValidate() {


const firstName = document.forms["contactForm"]["firstName"].value;
const lastName = document.forms["contactForm"]["lastName"].value;
const email = document.forms["contactForm"]["email"].value;
const phone = document.forms["contactForm"]["phone"].value;
const company = document.forms["contactForm"]["company"].value;



  if(firstName == "") {
    alert("You must fill out your first name!");
    return false;
  }
  if(lastName == "") {
    alert("You must fill out your last name!");
    return false;
  }
  if(email == "") {
    alert("You must fill out your email!");
    return false;
  }
  if(phone == "") {
    alert("You must fill out your phone number!");
    return false;
  }
  if(company == "") {
    alert("You must fill out your company's name!");
    return false;
  }

}