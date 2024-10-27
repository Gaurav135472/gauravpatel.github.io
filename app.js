// Define variables for steps, buttons, and progress elements
const steps = document.querySelectorAll('.step');
const nextBtn1 = document.getElementById('nextBtn1');
const nextBtn2 = document.getElementById('nextBtn2');
const progressbar = document.querySelectorAll('.progressbar li');
const form = document.getElementById('multiStepForm');
const successMessage = document.getElementById('successMessage');
const errorMessage = document.getElementById('errorMessage');

// Track the current step in the multi-step form process
let currentStep = 0;

// Event listener to handle transition from Step 1 (Email) to Step 2 (Message)
nextBtn1.addEventListener('click', function () {
    // Hide the current step and remove active state from progress bar
    steps[currentStep].classList.remove('active');
    progressbar[currentStep].classList.remove('active');

    // Move to the next step and activate it
    currentStep++;
    steps[currentStep].classList.add('active');
    progressbar[currentStep].classList.add('active');
});

// Event listener to handle transition from Step 2 (Message) to Step 3 (Submit)
nextBtn2.addEventListener('click', function () {
    // Hide the current step and remove active state from progress bar
    steps[currentStep].classList.remove('active');
    progressbar[currentStep].classList.remove('active');

    // Move to the next step and activate it
    currentStep++;
    steps[currentStep].classList.add('active');
    progressbar[currentStep].classList.add('active');
});

// AJAX submission of form data upon final step submission
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent traditional form submission

    const formData = new FormData(form); // Collect form data

    // Send the form data to a third-party service for handling emails
    fetch('https://formspree.io/f/xovqvbar', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        // If response is successful, display success message
        if (response.ok) {
            successMessage.style.display = 'block';
            form.reset(); // Clear the form after successful submission
        } else {
            // Show error message if response is not ok
            errorMessage.style.display = 'block';
        }
    }).catch(() => {
        // Handle any errors during the AJAX request
        errorMessage.style.display = 'block';
    });
});
