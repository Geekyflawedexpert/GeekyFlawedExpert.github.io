// Check if profile image exists and show it if it does
document.addEventListener('DOMContentLoaded', function() {
    const profileImg = document.getElementById('profileImg');
    
    // Test if the profile image loads successfully
    profileImg.addEventListener('load', function() {
        profileImg.classList.add('visible');
    });
    
    // If image fails to load, keep it hidden
    profileImg.addEventListener('error', function() {
        profileImg.style.display = 'none';
    });

    // Smooth scrolling for anchor links (if you add navigation later)
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

    // Add animation on scroll
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

    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });

    // Update last updated date automatically
    const footer = document.querySelector('.footer p');
    if (footer && footer.textContent.includes('Last Updated')) {
        const date = new Date();
        const options = { year: 'numeric', month: 'long' };
        footer.textContent = `Last Updated: ${date.toLocaleDateString('en-US', options)}`;
    }

    // Skill tag click animation
    document.querySelectorAll('.skill-tag').forEach(tag => {
        tag.addEventListener('click', function() {
            this.style.animation = 'pulse 0.5s';
            setTimeout(() => {
                this.style.animation = '';
            }, 500);
        });
    });
});

// Add CSS for pulse animation
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }
`;
document.head.appendChild(style);

// Console message for developers
console.log('%c👋 Welcome to my resume site!', 'color: #3498db; font-size: 16px; font-weight: bold;');
console.log('%cInterested in the code? Check out the GitHub repo!', 'color: #2c3e50; font-size: 14px;');
