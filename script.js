// DOM Elements
const themeToggle = document.getElementById('theme-toggle');
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const contactForm = document.getElementById('contact-form');
const yearElement = document.getElementById('year');
const navbar = document.querySelector('.navbar');
const footerThemeToggle = document.getElementById('footer-theme-toggle');

// Theme Management
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const isDarkMode = document.body.classList.contains('dark-theme');
    localStorage.setItem('darkMode', isDarkMode);
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    updateThemeIcons(isDarkMode);
}

function updateThemeIcons(isDarkMode) {
    // Update main theme toggle icon
    const mainIcon = themeToggle.querySelector('i');
    if (mainIcon) {
        mainIcon.className = isDarkMode ? 'fas fa-sun' : 'fas fa-moon';
    }
    
    // Update footer theme toggle icon
    const footerIcon = footerThemeToggle?.querySelector('i');
    if (footerIcon) {
        footerIcon.className = isDarkMode ? 'fas fa-sun' : 'fas fa-moon';
    }
}

function checkTheme() {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    if (darkMode) {
        document.body.classList.add('dark-theme');
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    updateThemeIcons(darkMode);
}

// Event Listeners
themeToggle?.addEventListener('click', toggleTheme);
footerThemeToggle?.addEventListener('click', toggleTheme);

// Mobile Navigation
hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('active');
});

// Close mobile nav when clicking a link
document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
    });
});

// Form Submission
contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon.`);
    contactForm.reset();
});

// Update copyright year
function updateYear() {
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (navbar) {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.hero-content, .hero-image, .about-text, .about-image, .skill-category, .project-card, .contact-info, .contact-form');
    const screenPosition = window.innerHeight / 1.3;
    
    elements.forEach(element => {
        if (element.getBoundingClientRect().top < screenPosition) {
            element.classList.add('animate');
        }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    checkTheme();
    updateYear();
    animateOnScroll();
    
    // Add animation to tech stack icons
    document.querySelectorAll('.tech-icon').forEach((icon, index) => {
        icon.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Project card hover effect
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
    
    window.addEventListener('scroll', animateOnScroll);
});