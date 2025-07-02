document.getElementById("loginform").addEventListener("submit", function(event) {
    event.preventDefault(); 
    const userType = document.getElementById("userType").value;
    if (userType === "student") {
        window.location.href = "la_sdashboard.html";
    } else if (userType === "instructor") {
        window.location.href = "la_idashboard.html";
    }
    else if (userType === "admin") {
        window.location.href = "la_adashboard.html";
    }
});
