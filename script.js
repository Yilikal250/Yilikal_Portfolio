document.getElementById("hamburger").addEventListener("click", function() {
    var toggleList = document.getElementById("toggleList");
    toggleList.classList.toggle("hidden");
    toggleList.classList.toggle("visible");
});

const textArray = ["Full Stack Developer", "HTML", "CSS", "JavaScript", "React", "Python", "Django", "SQL"];
const typingTextElement = document.getElementById('typing-text');
let textArrayIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const currentText = textArray[textArrayIndex];
    
    if (isDeleting) {
        typingTextElement.textContent = currentText.substring(0, charIndex--);
    } else {
        typingTextElement.textContent = currentText.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => isDeleting = true, 2000);  // Pause before start deleting
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textArrayIndex = (textArrayIndex + 1) % textArray.length;
    }

    const delay = isDeleting ? 50 : 100;
    setTimeout(typeWriter, delay);
}

document.addEventListener("DOMContentLoaded", () => setTimeout(typeWriter, 1000));