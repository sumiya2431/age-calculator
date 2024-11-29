function calculateAge() {
    const birthDate = new Date(document.getElementById('birthdate').value);
    const currentDate = new Date(document.getElementById('currentDate').value);

    if (isNaN(birthDate) || isNaN(currentDate)) {
        document.getElementById('result').textContent = "Please enter valid dates.";
        return;
    }

    const ageInMilliseconds = currentDate - birthDate;
    const ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365));

    document.getElementById('result').textContent = `Your age is: ${ageInYears} years old.`;
}
