// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.
var goodDogButton = document.getElementById("submit-button");
// Create a function called changeDuration()
function successMessage() {
    contactPage = document.getElementById("contact-page");
    var thankYouMessage = document.createElement("p"); 
    thankYouMessage.textContent = "Thank you for your message"; 
    thankYouMessage.style.fontSize = "24px"; 

    contactPage.innerHTML = ""; // Clear existing content
    contactPage.appendChild(thankYouMessage);
}

// Attach the changeDuration function to the "Change Duration" pseudo-button
goodDogButton.addEventListener("click", successMessage);
