// Function to toggle the FAQ answer visibility
function toggleAnswer(element) {
    const answer = element.nextElementSibling; // Get the corresponding answer element
    const icon = element.querySelector('.icon'); // Get the icon element

    if (answer.style.maxHeight) {
        // If the answer is currently visible, hide it
        answer.style.maxHeight = null;
        icon.innerHTML = '&#9660;'; // Downward arrow
    } else {
        // If the answer is currently hidden, show it
        answer.style.maxHeight = answer.scrollHeight + "px";
        icon.innerHTML = '&#9650;'; // Upward arrow
    }
}
