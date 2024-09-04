function validateForm() {
    var teamName = document.getElementById("team_name").value;
    var college = document.getElementById("college").value;
    var leaderName = document.getElementById("leader_name").value;
    var leaderPhone = document.getElementById("leader_phone").value;
    var leaderEmail = document.getElementById("leader_email").value;
    var members = document.getElementById("members").value;
    var problemStatement = document.getElementById("problem_statement").value;
    var solutionOverview = document.getElementById("solution_overview").value;
    var mentorName = document.getElementById("mentor_name").value;
    var mentorEmail = document.getElementById("mentor_email").value;
    var mentorPhone = document.getElementById("mentor_phone").value;
    var mentorCollege = document.getElementById("mentor_college").value;
    var password = document.getElementById("password").value;
    var retypePassword = document.getElementById("retype_password").value;
    var securityAnswer = document.getElementById("security_answer").value;

    if (teamName === "" || college === "" || leaderName === "" || leaderPhone === "" || leaderEmail === "" || members === "" || problemStatement === "" || solutionOverview === "" || mentorName === "" || mentorEmail === "" || mentorPhone === "" || mentorCollege === "" || password === "" || retypePassword === "" || securityAnswer === "") {
        alert("All fields must be filled out");
        return false;
    }

    if (password !== retypePassword) {
        alert("Passwords do not match");
        return false;
    }

    return true;
}
