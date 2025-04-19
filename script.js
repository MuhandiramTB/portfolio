// Dark/Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Check for saved theme preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// Smooth Scrolling for Navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Project Card Animation
const projects = document.querySelectorAll('.project');
projects.forEach(project => {
    project.addEventListener('mouseenter', () => {
        project.style.transform = 'translateY(-5px)';
        project.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
    });
    
    project.addEventListener('mouseleave', () => {
        project.style.transform = 'translateY(0)';
        project.style.boxShadow = 'none';
    });
});

// Form Submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent! (This is a demo)');
    contactForm.reset();
});

// Dynamic Year in Footer
document.getElementById('copyright').textContent = `© ${new Date().getFullYear()} Your Name`;

// Project Button Functionality
document.querySelectorAll('.project-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert('This project is coming soon!');
    });
});