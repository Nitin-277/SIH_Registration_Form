document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    let isValid = true;
  
    // List of input fields and corresponding error messages
    const inputs = [
      { id: 'name', errorId: 'nameError', message: 'Name is required.' },
      { id: 'email', errorId: 'emailError', message: 'Email is invalid.', validator: validateEmail },
      { id: 'phone', errorId: 'phoneError', message: 'Phone number must be 10 digits.', validator: validatePhone },
      { id: 'college', errorId: 'collegeError', message: 'College/University is required.' },
      { id: 'teamName', errorId: 'teamNameError', message: 'Team name is required.' },
      { id: 'teamSize', errorId: 'teamSizeError', message: 'Team size must be between 1 and 6.', validator: validateTeamSize },
      { id: 'problemStatement', errorId: 'problemStatementError', message: 'Problem statement is required.' }
    ];
  
    // Loop through the inputs and validate each field
    inputs.forEach(input => {
      const field = document.getElementById(input.id);
      const errorElement = document.getElementById(input.errorId);
  
      if (!field.value.trim()) {
        // Show error if the field is empty
        errorElement.textContent = input.message;
        errorElement.style.visibility = 'visible';
        field.parentElement.classList.add('invalid');
        isValid = false;
      } else if (input.validator && !input.validator(field.value)) {
        // Validate based on the custom validator
        errorElement.textContent = input.message;
        errorElement.style.visibility = 'visible';
        field.parentElement.classList.add('invalid');
        isValid = false;
      } else {
        // If valid, hide the error and remove invalid class
        errorElement.style.visibility = 'hidden';
        field.parentElement.classList.remove('invalid');
      }
    });
  
    if (isValid) {
      // If all fields are valid, submit the form (you can customize form submission here)
      alert('Registration successful!');
    }
  });
  
  // Validator functions
  function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
  
  function validatePhone(phone) {
    const phonePattern = /^[0-9]{10}$/;
    return phonePattern.test(phone);
  }
  
  function validateTeamSize(size) {
    return size >= 1 && size <= 6;
  }
  