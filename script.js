document.addEventListener('DOMContentLoaded', function () {

    // --- 1. Typing Effect ---
    const typingText = document.getElementById('typing-text');
    const words = ["Software Engineer", "Full-Stack Developer", "Problem Solver", "Great Learner"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];
        let typeSpeed = isDeleting ? 50 : 90;

        if (isDeleting) {
            // Deleting characters
            typingText.textContent = currentWord.substring(0, charIndex--);
        } else {
            // Typing characters
            typingText.textContent = currentWord.substring(0, charIndex++);
        }

        if (!isDeleting && charIndex === currentWord.length + 1) {
            // Word fully typed
            typeSpeed = 1250; // Pause at end of word
            isDeleting = true;
        } else if (isDeleting && charIndex === -1) {
            // Word fully deleted
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 50; // Pause before new word
        }

        setTimeout(type, typeSpeed);
    }
    // Start the typing effect
    type();


    // --- 2. Active Nav Link on Scroll ---
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Check if scroll position is within this section
            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });

});