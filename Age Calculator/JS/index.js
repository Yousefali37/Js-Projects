// Get elements
const dobInput = document.getElementById('dob');
const calculateButton = document.getElementById('calculate');
const ageDisplay = document.getElementById('age');

// Event listener for calculate button
calculateButton.addEventListener('click', () => {
    const dobValue = dobInput.value;
    if (!dobValue) {
        alert('Please enter your date of birth!');
        return;
    }

    // Calculate age
    const dob = new Date(dobValue);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();

    // Adjust age if the birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    // Display the calculated age
    ageDisplay.textContent = age;
});
