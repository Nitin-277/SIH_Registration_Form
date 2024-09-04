document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');
    var inputs = form.querySelectorAll('input, textarea');
    var submitButton = form.querySelector('button[type="submit"]');
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phonePattern = /^\+?(\d{1,3})?\s?\d{10}$/;

    inputs.forEach(function(input) {
        input.addEventListener('input', function() {
            validateField(input);
            toggleSubmitButton();
        });
    });

    form.addEventListener('submit', function(event) {
        var isValid = true;
        inputs.forEach(function(input) {
            if (!validateField(input)) {
                isValid = false;
            }
        });

        if (!isValid) {
            event.preventDefault();
        }
    });

    function validateField(input) {
        var value = input.value.trim();
        var isValid = true;

        if (input.type === 'email') {
            isValid = emailPattern.test(value);
        } else if (input.type === 'tel') {
            isValid = phonePattern.test(value);
        } else if (input.type === 'number') {
            isValid = value >= 2 && value <= 6;
        } else if (input.type === 'password') {
            var password = document.getElementById('password').value;
            var retypePassword = document.getElementById('retype_password').value;
            isValid = password === retypePassword && password.length >= 6;
        } else if (input.type === 'date') {
            isValid = value !== '';
        } else if (input.type === 'text' || input.type === 'textarea') {
            isValid = value.length > 0;
        }

        if (!isValid) {
            input.classList.add('invalid');
            input.classList.remove('valid');
        } else {
            input.classList.remove('invalid');
            input.classList.add('valid');
        }

        return isValid;
    }

    function toggleSubmitButton() {
        var isFormValid = true;
        inputs.forEach(function(input) {
            if (input.classList.contains('invalid') || input.value.trim() === '') {
                isFormValid = false;
            }
        });

        submitButton.disabled = !isFormValid;
    }
});
