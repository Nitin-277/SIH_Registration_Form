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

    // Basic empty field check
    if (!teamName || !college || !leaderName || !leaderPhone || !leaderEmail || !leaderDob || 
        !members || !problemStatement || !solutionOverview || !mentorName || 
        !mentorEmail || !mentorPhone || !mentorCollege || !password || !retypePassword || !securityAnswer) {
        alert("All fields must be filled out.");
        return false;
    }

    // Email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(leaderEmail)) {
        alert("Please enter a valid leader's email address.");
        return false;
    }
    if (!emailPattern.test(mentorEmail)) {
        alert("Please enter a valid mentor's email address.");
        return false;
    }

    // Phone number validation (basic check for Indian numbers)
    var phonePattern = /^[6-9]\d{9}$/;
    if (!phonePattern.test(leaderPhone)) {
        alert("Please enter a valid 10-digit leader's phone number.");
        return false;
    }
    if (!phonePattern.test(mentorPhone)) {
        alert("Please enter a valid 10-digit mentor's phone number.");
        return false;
    }

    // Password match validation
    if (password !== retypePassword) {
        alert("Passwords do not match.");
        return false;
    }

    // Password strength validation
    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return false;
    }

    // Team members validation
    if (members < 2 || members > 6) {
        alert("Team members must be between 2 and 6.");
        return false;
    }

    // Date of birth validation
    var leaderDobDate = new Date(leaderDob);
    var today = new Date();
    if (leaderDobDate >= today) {
        alert("Please enter a valid date of birth.");
        return false;
    }

    return true;
}
