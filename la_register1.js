document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    const userType = document.getElementById("userType").value;
    if (userType === "student") {
        window.location.href = "la_sregister2.html";
    } else if (userType === "instructor") {
        window.location.href = "la_iregister2.html";
    }
});
