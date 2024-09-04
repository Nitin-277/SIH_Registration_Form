function validateForm() {
    var teamName = document.getElementById("team_name").value.trim();
    var college = document.getElementById("college").value.trim();
    var leaderName = document.getElementById("leader_name").value.trim();
    var leaderPhone = document.getElementById("leader_phone").value.trim();
    var leaderEmail = document.getElementById("leader_email").value.trim();
    var leaderDob = document.getElementById("leader_dob").value;
    var members = document.getElementById("members").value;
    var problemStatement = document.getElementById("problem_statement").value.trim();
    var solutionOverview = document.getElementById("solution_overview").value.trim();
    var mentorName = document.getElementById("mentor_name").value.trim();
    var mentorEmail = document.getElementById("mentor_email").value.trim();
    var mentorPhone = document.getElementById("mentor_phone").value.trim();
    var mentorCollege = document.getElementById("mentor_college").value.trim();
    var password = document.getElementById("password").value;
    var retypePassword = document.getElementById("retype_password").value;
    var securityAnswer = document.getElementById("security_answer").value.trim();

    // Validate Team Name (must be alphanumeric and at least 3 characters)
    var teamNamePattern = /^[a-zA-Z0-9\s]{3,}$/;
    if (!teamNamePattern.test(teamName)) {
        alert("Team name must be at least 3 characters long and contain only letters and numbers.");
        return false;
    }

    // Validate College Name (cannot be empty)
    if (college.length < 3) {
        alert("Please enter a valid college name.");
        return false;
    }

    // Validate Leader's Name (must be alphabetic and at least 3 characters)
    var namePattern = /^[a-zA-Z\s]{3,}$/;
    if (!namePattern.test(leaderName)) {
        alert("Leader's name must be at least 3 characters long and contain only letters.");
        return false;
    }

    // Validate Leader's Phone Number (using country-specific formats)
    var phonePattern = /^\+91[6-9]\d{9}$/;  // Example for Indian phone numbers
    if (!phonePattern.test(leaderPhone)) {
        alert("Please enter a valid 10-digit Indian phone number starting with +91.");
        return false;
    }

    // Validate Leader's Email (basic email validation)
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(leaderEmail)) {
        alert("Please enter a valid email address for the leader.");
        return false;
    }

    // Validate Leader's Date of Birth (must be a valid date in the past)
    var leaderDobDate = new Date(leaderDob);
    var today = new Date();
    if (!leaderDob || leaderDobDate >= today) {
        alert("Please enter a valid date of birth for the leader.");
        return false;
    }

    // Validate Number of Members (between 2 and 6)
    if (members < 2 || members > 6) {
        alert("Team members must be between 2 and 6.");
        return false;
    }

    // Validate Problem Statement and Solution Overview (cannot be empty)
    if (problemStatement.length < 10) {
        alert("Problem statement must be at least 10 characters long.");
        return false;
    }
    if (solutionOverview.length < 10) {
        alert("Solution overview must be at least 10 characters long.");
        return false;
    }

    // Validate Mentor's Name (must be alphabetic and at least 3 characters)
    if (!namePattern.test(mentorName)) {
        alert("Mentor's name must be at least 3 characters long and contain only letters.");
        return false;
    }

    // Validate Mentor's Email (basic email validation)
    if (!emailPattern.test(mentorEmail)) {
        alert("Please enter a valid email address for the mentor.");
        return false;
    }

    // Validate Mentor's Phone Number (using country-specific formats)
    if (!phonePattern.test(mentorPhone)) {
        alert("Please enter a valid 10-digit Indian phone number for the mentor starting with +91.");
        return false;
    }

    // Validate Mentor's College (cannot be empty)
    if (mentorCollege.length < 3) {
        alert("Please enter a valid mentor's college name.");
        return false;
    }

    // Validate Password and Retyped Password (must match and be at least 8 characters)
    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return false;
    }
    if (password !== retypePassword) {
        alert("Passwords do not match.");
        return false;
    }

    // Validate Security Answer (cannot be empty)
    if (securityAnswer.length < 1) {
        alert("Please answer the security question.");
        return false;
    }

    // If all validations pass, the form is submitted
    return true;
}
