// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate elements on scroll
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.feature-card, .problem-card, .pricing-card, .timeline-item');

    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Enhanced Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelector('.nav-links');

    // Create mobile menu button
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    mobileMenuBtn.setAttribute('aria-label', 'Toggle mobile menu');
    nav.appendChild(mobileMenuBtn);

    let isMenuOpen = false;

    // Mobile responsiveness
    function handleResize() {
        if (window.innerWidth <= 768) {
            mobileMenuBtn.style.display = 'block';
            if (!isMenuOpen) {
                navLinks.classList.remove('mobile-open');
            }
        } else {
            mobileMenuBtn.style.display = 'none';
            navLinks.classList.remove('mobile-open');
            isMenuOpen = false;
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', function(e) {
        e.preventDefault();
        isMenuOpen = !isMenuOpen;

        if (isMenuOpen) {
            navLinks.classList.add('mobile-open');
            mobileMenuBtn.innerHTML = '<i class="fas fa-times"></i>';
            mobileMenuBtn.setAttribute('aria-expanded', 'true');
        } else {
            navLinks.classList.remove('mobile-open');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
    });

    // Close mobile menu when clicking on a link
    navLinks.addEventListener('click', function(e) {
        if (e.target.tagName === 'A' && window.innerWidth <= 768) {
            navLinks.classList.remove('mobile-open');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            isMenuOpen = false;
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (isMenuOpen && !nav.contains(e.target)) {
            navLinks.classList.remove('mobile-open');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            isMenuOpen = false;
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
    });
});

// Improved hero title animation (no typing effect to avoid HTML rendering issues)
document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        // Simple fade-in animation instead of typing
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(30px)';
        heroTitle.style.transition = 'opacity 1s ease, transform 1s ease';

        setTimeout(() => {
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 500);
    }
});

// Add GitHub star counter (placeholder)
document.addEventListener('DOMContentLoaded', function() {
    // This would typically fetch from GitHub API
    const githubLinks = document.querySelectorAll('a[href*="github.com"]');
    githubLinks.forEach(link => {
        if (link.textContent.includes('Star')) {
            // Add star icon if not present
            if (!link.querySelector('.fas')) {
                const icon = document.createElement('i');
                icon.className = 'fab fa-github';
                link.insertBefore(icon, link.firstChild);
            }
        }
    });
});

// Smooth reveal animation for sections
const revealSections = document.querySelectorAll('section');
const revealObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, {
    threshold: 0.15
});

revealSections.forEach(section => {
    revealObserver.observe(section);
});

// Add CSS for reveal animation
const style = document.createElement('style');
style.textContent = `
    section {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease, transform 0.8s ease;
    }

    section.revealed {
        opacity: 1;
        transform: translateY(0);
    }

    .hero {
        opacity: 1;
        transform: none;
    }
`;
document.head.appendChild(style);