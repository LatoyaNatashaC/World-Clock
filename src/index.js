let losAngelesElement = document.querySelector("#los-angeles");

let losAngelesDateElement = losAngelesElement.querySelector(".date");

let losAngelesTimeElement = losAngelesElement.querySelector(".time");

losAngelesDateElement.innerHTML = moment().format("MMMM Do YYYY");

losAngelesTimeElement.innerHTML = "6:35:15 <small>PM</small>";
