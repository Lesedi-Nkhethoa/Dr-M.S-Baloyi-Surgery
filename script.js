const menuBtn = document.getElementById("menuBtn")
const navMenu = document.getElementById("navMenu")

menuBtn.addEventListener("click", () => {

navMenu.classList.toggle("active")

})

const form = document.getElementById("appointment-form");

form.addEventListener("submit", function(event) {

event.preventDefault();

emailjs.sendForm(
"service_jqgvq6a",
"template_ykzjop7",
this
)

.then(function() {

alert("Appointment request sent successfully!");
form.reset();

},

function(error) {

alert("Failed to send appointment.");

});

});