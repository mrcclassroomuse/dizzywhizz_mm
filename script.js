document.addEventListener('DOMContentLoaded', () => {
   const menuToggle = document.getElementById('mobile-menu');
   const navMenu = document.querySelector('.nav-menu');


   // Toggle mobile menu visibility
   menuToggle.addEventListener('click', () => {
       navMenu.classList.toggle('active');
   });


   // Optional: Close menu when a link is clicked (useful for mobile)
   const navLinks = document.querySelectorAll('.nav-menu a');
   navLinks.forEach(link => {
       link.addEventListener('click', () => {
           navMenu.classList.remove('active');
       });
   });
});


let correctAnswer;


function generateMath() {
   // Generates two random numbers between 1 and 10
   const n1 = Math.floor(Math.random() * 10) + 1;
   const n2 = Math.floor(Math.random() * 10) + 1;
  
   document.getElementById('num1').innerText = n1;
   document.getElementById('num2').innerText = n2;
  
   correctAnswer = n1 + n2;
}


function checkAuth() {
   const userVal = parseInt(document.getElementById('user-answer').value);
   const survey = document.getElementById('survey-section');
   const captcha = document.getElementById('captcha-container');
   const error = document.getElementById('error-msg');


   if (userVal === correctAnswer) {
       captcha.style.display = 'none'; // Hide the math box
       survey.style.display = 'block'; // Show the Google Form
   } else {
       error.style.display = 'block';
       generateMath(); // Refresh the numbers if they get it wrong
       document.getElementById('user-answer').value = '';
   }
}


// Run the math generator when the page loads
window.onload = generateMath;



