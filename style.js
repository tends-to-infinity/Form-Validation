function printError(id, msg) {
  document.getElementById(id).innerHTML = msg;
}

let form = document.getElementById('form');
form.addEventListener('submit', validateForm);


function validateForm(event) {

  event.preventDefault();
  let name = document.Form.name;
  let email = document.Form.email;
  let password = document.Form.password;
  let mobile = document.Form.mobile;
  let empid = document.Form.employeeId;
  let gender = document.Form.gender;
  let birthdate = document.Form.birthDate;
  let teams = document.Form.teams;

  let boolName = validateName(name);
  let boolEmail = validateEmail(email);
  let boolPassword = validatePassword(password);
  let boolMobile = validateMobile(mobile);
  let boolEmpId = validateEmpId(empid)
  let boolGender = validateGender(gender);
  let boolBirthDate = validateBirthdate(birthdate);
  let boolTeams = validateTeams(teams);

  if (
    boolName &&
    boolEmail &&
    boolPassword &&
    boolMobile &&
    boolEmpId &&
    boolGender &&
    boolBirthDate &&
    boolTeams
  ) {
    alert("Form Submitted");
    return true;
  }
  return false;
}

function validateName(name) {
  if (name.value.trim() == "") {
    printError("nameErr", "Please Enter Your Name");
    name.focus();
    return false;
  } else {
    let regex1 = /^[A-Za-z]+$/;
    let regex2 = /^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/;
    if (name.value.match(regex1) || name.value.match(regex2)) {
      return true;
    } else {
      printError("nameErr", "Please Enter A Valid Name");
      name.focus();
      return false;
    }
  }
}

function validateEmail(email) {
  if (email.value.trim() == "") {
    printError("emailErr", "Please Enter Your Email Address");
    email.focus();
    return false;
  } else {
    let regex = /^\w+([\.-]?\w+)*@groww\.in$/;
    if (email.value.match(regex)) {
      return true;
    } else {
      printError("emailErr", "Please Enter A Valid Email Address");
      email.focus();
      return false;
    }
  }
}

function validatePassword(password) {
  if (password.value.trim() == "") {
    printError("passwordErr", "Please Enter Your Password");
    password.focus();
    return false;
  } else {
    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
    if (password.value.match(regex)) {
      return true;
    } else {
      printError("passwordErr", "min 5characters Alteast(1upper + 1lower)Alphabets+1digit "
      );
      password.focus();
      return false;
    }
  }
}

function validateMobile() {
  if (mobile.value.trim() == "") {
    printError("mobileErr", "Please Enter Your Mobile Number");
    mobile.focus();
    return false;
  } else {
    let regex = /^\d{10}$/;
    if (mobile.value.match(regex)) {
      return true;
    } else {
      printError("mobileErr", "Please Enter A Valid 10 Digit Mobile Number");
      mobile.focus();
      return false;
    }
  }
}

function validateEmpId(empid) {
  let i, count = 0;
  let characters;
  let str = empid.value;
  for (i = 0; i < str.length; i++) {
    characters = str.charAt(i);
    if (
      !(characters >= "0" && characters <= "9") &&
      !(characters >= "a" && characters <= "z") &&
      !(characters >= "A" && characters <= "Z")
    ) {
      printError("employeeIdErr", "Employee ID must be alphanumeric");
      empid.focus();
      return false;
    } else {
      count++;
    }
  }
  if (count === 6) return true;
  else {
    printError("employeeIdErr", "Employee Id should consist of 6 characters");
    empid.focus();
    return false;
  }
}

function validateGender(gender) {
  if (
    gender.value === "Male" ||
    gender.value === "Female" ||
    gender.value === "Others"
  ) {
    return true;
  } else {
    printError("genderErr", "Select Your Gender");
    return false;
  }
}

function validateBirthdate(birthdate) {
  let date = birthdate.value;
  if (date != "") {
    return true;
  } else {
    printError("birthdateErr", "Invalid date format");
    birthdate.focus();
    return false;
  }
}

function validateTeams(teams) {
  if (teams.value == "Select Your Team") {
    printError("teamsErr", "Select your team from the list");
    teams.focus();
    return false;
  } else {
    return true;
  }
}

const inlineForm = document.querySelector(".form-inline");
const genderLabel = document.querySelector(".gender");
const birthDateLabel = document.querySelector(".birthdate");
const teamsLabel = document.querySelector(".teams");

inlineForm.addEventListener("mouseenter", (el) => {
  genderLabel.style.color = "#00d09c";
});

inlineForm.addEventListener("mouseleave", (el) => {
  genderLabel.style.color = "#9a9ca7";
});

document.querySelector("#team").addEventListener("mouseenter", (el) => {
  teamsLabel.style.color = "#00d09c";
});
document.querySelector("#team").addEventListener("mouseleave", (el) => {
  teamsLabel.style.color = "#9a9ca7";
});

document.querySelector("#birthDate").addEventListener("mouseenter", (el) => {
  birthDateLabel.style.color = "#00d09c";
});

document.querySelector("#birthDate").addEventListener("mouseleave", (el) => {
  birthDateLabel.style.color = "#9a9ca7";
});


fetch("teams.json").then(
  response => response.json()
).then(data => {
  data.forEach(element => {
    document.querySelector("#team").innerHTML += "<option>" + element + "</option>";
  });
})

