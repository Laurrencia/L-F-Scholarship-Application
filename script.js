const calcAgeScore = (age) => {
  // function for calculating Score according to (age){}
  let score = 0;

  if (age === null || age === "") {
    alert(`${age} is not a valid age`);
  } else {
    let ageAsNumber = +age;
    //+age in line 7 converts the age from string to a number
    if (ageAsNumber >= 18 && ageAsNumber <= 24) {
      score = 100;
    } else if (ageAsNumber >= 25 && ageAsNumber <= 30) {
      score = 80;
    } else if (ageAsNumber >= 31 && ageAsNumber <= 35) {
      score = 50;
    } else if (ageAsNumber >= 36 && ageAsNumber <= 40) {
      score = 30;
    } else {
      score = 10;
    }
  }
  console.log("score from age:", score);
  return score;
};

const calcCountryScore = (country) => {
   // function for calculating Score according to (country){}
  let score = 0;
  if (country === "") {
    alert(`${country} is not a valid country`);
  } else {
    if (africa.includes(country)) {
      score = 50;
    } else if (asia.includes(country)) {
      score = 40;
    } else if (southAmerica.includes(country)) {
      score = 30;
    } else if (northAmerica.includes(country)) {
      score = 20;
    } else {
      score = 10;
    }
  }
  console.log("score from country:", score);
  return score;
};



const calcSubjectScore = () => {
  // getting the value of subjects and converting to number
  let mathScore = +document.getElementById("maths").value;
  let englishScore = +document.getElementById("english").value;
  let scoreThree = +document.getElementById("score-three").value;
  let scoreFour = +document.getElementById("score-four").value;
  let scoreFive = +document.getElementById("score-five").value;
  let scoreSix = +document.getElementById("score-six").value;
  let scoreSeven = +document.getElementById("score-seven").value;
  let scoreEight = +document.getElementById("score-eight").value;

  let points = 0;
   //  calculating the avaerage Score according to (subject){}

  let sum =
    mathScore +
    englishScore +
    scoreThree +
    scoreFour +
    scoreFive +
    scoreSix +
    scoreSeven +
    scoreEight;
   // operation that rounds up the average score to the nearest whole number
  let score = Math.round(sum / 8);
   // operation for calculating  the points according to average score of subjects
  if (score >= 90 && score <= 100) {
    points = 150;
  } else if (score >= 85 && score <= 89) {
    points = 140;
  } else if (score >= 75 && score <= 84) {
    points = 120;
  } else if (score >= 65 && score <= 74) {
    points = 100;
  } else if (score >= 60 && score <= 64) {
    points = 80;
  } else if (score >= 50 && score <= 59) {
    points = 50;
  } else {
    points = 20;
  }

  return points;
};
// function for calculating the total points obtained the candidate from the three criteria

const calcTotalPoints = (age, country) => {
  let pointsFromAge = calcAgeScore(age);
  let pointsFromCountry = calcCountryScore(country);
  let pointsFromSubject = calcSubjectScore();
  console.log("points from subject", pointsFromSubject);

  let totalPoints = pointsFromAge + pointsFromCountry + pointsFromSubject;
  return totalPoints;
};
// function to determine the scholarship status based on the 180 pass mark
const calcScholarshipStatus = () => {
  let age = document.getElementById("age").value;
  let ageAsNumber = +age;
  let countryValue = document.getElementById("country").value;
  let country = countryValue.charAt(0).toUpperCase() + countryValue.slice(1);
  let gotScholarship = false;

  let points = calcTotalPoints(ageAsNumber, country);
  if (points >= 180) {
    gotScholarship = true;
  }
  console.log("scholarship status", gotScholarship);
  return gotScholarship;
};

// function for form validation
const validate = (firstName, lastName, age, country) => {
  let isUserValid = true;
  if (firstName === "") {
    alert("please input a valid First Name");
    isUserValid = false;
  }
  if (lastName === "") {
    alert("please input a valid Last Name");
    isUserValid = false;
  }
  if (age === Number.isNaN) {
    alert("please input a valid Age");
    isUserValid = false;
  }
  if (age < 18) {
    alert("You are not eligible for this scholarship because you're underage");
    isUserValid = false;
  }
  if (country === "") {
    alert("please input a valid Country");
    isUserValid = false;
  }
  return isUserValid;
};

// function that gets the value,checks validation and prevent form submission unless filled
const handleSubmit = (event) => {
  event.preventDefault();

  let form = document.getElementById("form");
  let formContainer = document.getElementById("form-container");
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("last-name").value;
  let age = +document.getElementById("age").value;
  let ageAsNumber = +age;
  let countryValue = document.getElementById("country").value;
  let country = countryValue.charAt(0).toUpperCase() + countryValue.slice(1);

  let isUserValid = validate(firstName, lastName, age, country);

  let scholarshipStatus = calcScholarshipStatus();
  let points = calcTotalPoints(ageAsNumber, country);

  // function that  hides form and displays applicants name,country,age and scholarship status

  if (!isUserValid) {
    console.log(`user does not meet certain requirements`);
  } else {
    form.classList.add("hidden");

    if (scholarshipStatus) {
      formContainer.textContent = `Congratulations ${firstName} ${lastName} age ${age}, you scored ${points} points and have been awarded the Scholarship`;
    } else {
      formContainer.textContent = `Sorry you scored ${points} points and  didnt make the required points for the  Scholarship`;
    }

    console.log(
      `${firstName} ${lastName} from ${country} is age ${age} and has total points ${points} `
    );
  }
};
//  function that adds events listener to the submit button
let button = document.getElementById("submit-btn");
button.addEventListener("click", handleSubmit);

let africa = [
  "Algeria",
  "Angola",
  "Benin",
  "Botswana",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cameroon",
  "Central African Republic",
  "Chad",
  "Comoros",
  "Democratic Republic of the Congo",
  "Republic of the Congo",
  "Cote d'Ivoire",
  "Djibouti",
  "Egypt",
  "Equatorial Guinea",
  "Eritrea",
  "Ethiopia",
  "Gabon",
  "Gambia",
  "Ghana",
  "Guinea",
  "Guinea Bissau",
  "Kenya",
  "Lesotho",
  "Liberia",
  "Libya",
  "Madagascar",
  "Malawi",
  "Mali",
  "Mauritania",
  "Mauritius",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Niger",
  "Nigeria",
  "Rwanda",
  "Sao Tome and Principe",
  "Senegal",
  "Seychelles",
  "Sierra Leone",
  "Somalia",
  "South Africa",
  "South Sudan",
  "Sudan",
  "Swaziland",
  "Tanzania",
  "Togo",
  "Tunisia",
  "Uganda",
  "Zambia",
  "Zimbabwe",
];

let asia = [
  "Armenia",
  "Azerbaijan",
  "Bahrain",
  "Bangladesh",
  "Bhutan",
  "Brunei",
  "Cambodia",
  "China",
  "Cyprus",
  "Georgia",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Israel",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Lebanon",
  "Malaysia",
  "Maldives",
  "Mongolia",
  "Myanmar",
  "Nepal",
  "North Korea",
  "Oman",
  "Pakistan",
  "Palestine",
  "Philippines",
  "Qatar",
  "Russia",
  "Saudi Arabia",
  "Singapore",
  "South Korea",
  "Sri Lanka",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Thailand",
  "Timor Leste",
  "Turkey",
  "Turkmenistan",
  "United Arab Emirates",
  "Uzbekistan",
  "Vietnam",
  "Yemen",
];

let northAmerica = [
  "Antigua and Barbuda",
  "Bahamas",
  "Barbados",
  "Belize",
  "Canada",
  "Costa Rica",
  "Cuba",
  "Dominica",
  "Dominican Republic",
  "El Salvador",
  "Grenada",
  "Guatemala",
  "Haiti",
  "Honduras",
  "Jamaica",
  "Mexico",
  "Nicaragua",
  "Panama",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Trinidad and Tobago",
  "United States of America",
];

let southAmerica = [
  "Argentina",
  "Bolivia",
  "Brazil",
  "Chile",
  "Colombia",
  "Ecuador",
  "Guyana",
  "Paraguay",
  "Peru",
  "Suriname",
  "Uruguay",
  "Venezuela",
];
