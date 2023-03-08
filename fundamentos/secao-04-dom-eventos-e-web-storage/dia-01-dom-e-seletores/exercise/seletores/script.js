let header = document.getElementById("header-container");
header.style.backgroundColor = "green";

let emergency = document.querySelector(".emergency-tasks");
emergency.style.backgroundColor = "salmon";

let emergencyTitle = document.querySelectorAll(".emergency-tasks h3");
for (let index = 0; index < emergencyTitle.length; index += 1) {
    emergencyTitle[index].style.backgroundColor = "purple";
}

let noEmergency = document.querySelector(".no-emergency-tasks");
noEmergency.style.backgroundColor = "rgb(243, 233, 96)";

let noEmergencyTitle = document.querySelectorAll(".no-emergency-tasks h3");
for (let index = 0; index < noEmergencyTitle.length; index += 1) {
    noEmergencyTitle[index].style.backgroundColor = "black";
}

let footer = document.getElementById("footer-container");
footer.style.backgroundColor = "rgb(10, 65, 10)"
