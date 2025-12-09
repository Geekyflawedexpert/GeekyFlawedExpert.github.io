// Retro Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all animations
    initStarfield();
    initTypingEffect();
    initProfileImage();
    updateLastUpdated();
    initSmoothScroll();
    
    console.log('%c🚀 Welcome to my retro site!', 'color: #00ff9f; font-size: 20px; font-weight: bold; text-shadow: 0 0 10px #00ff9f;');
    console.log('%c✨ Built with passion and lots of caffeine', 'color: #00d4ff; font-size: 14px;');
});

// Starfield Background Animation
function initStarfield() {
    const canvas = document.getElementById('starfield');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
    
    const stars = [];
    const numStars = 200;
    
    // Create stars
    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1.5,
            speed: Math.random() * 0.5 + 0.1,
            opacity: Math.random()
        });
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        stars.forEach(star => {
            // Update position
            star.y += star.speed;
            if (star.y > canvas.height) {
                star.y = 0;
                star.x = Math.random() * canvas.width;
            }
            
            // Twinkle effect
            star.opacity += (Math.random() - 0.5) * 0.1;
            star.opacity = Math.max(0.3, Math.min(1, star.opacity));
            
            // Draw star
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.radius * 2);
            gradient.addColorStop(0, `rgba(0, 255, 159, ${star.opacity})`);
            gradient.addColorStop(1, `rgba(0, 212, 255, 0)`);
            ctx.fillStyle = gradient;
            ctx.fill();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// Typing Effect
function initTypingEffect() {
    const text = "Computer Science Student | ML Enthusiast | Open to Research";
    const typedElement = document.getElementById('typedText');
    
    if (!typedElement) return;
    
    let index = 0;
    const speed = 80;
    
    function type() {
        if (index < text.length) {
            typedElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }
    
    setTimeout(type, 1000);
}

// Profile Image Handler
function initProfileImage() {
    const profileImg = document.getElementById('profileImg');
    
    if (!profileImg) return;
    
    profileImg.addEventListener('load', function() {
        this.classList.add('visible');
    });
    
    profileImg.addEventListener('error', function() {
        this.style.display = 'none';
    });
    
    // Trigger load event if image is already cached
    if (profileImg.complete) {
        profileImg.classList.add('visible');
    }
}

// Update Last Updated Date
function updateLastUpdated() {
    const lastUpdatedElement = document.getElementById('lastUpdated');
    if (lastUpdatedElement) {
        const date = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        lastUpdatedElement.textContent = date.toLocaleDateString('en-US', options);
    }
}

// Smooth Scrolling
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            } else if (this.getAttribute('href') === '#') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Create floating particles
function createFloatingParticles() {
    const container = document.querySelector('.particles-container');
    if (!container) return;
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 4 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.backgroundColor = '#00ff9f';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.opacity = Math.random() * 0.5 + 0.2;
        particle.style.animation = `float ${Math.random() * 10 + 10}s ease-in-out infinite`;
        particle.style.boxShadow = '0 0 10px #00ff9f';
        container.appendChild(particle);
    }
}

createFloatingParticles();

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Konami Code Easter Egg
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join('') === konamiPattern.join('')) {
        activateMatrixMode();
    }
});

function activateMatrixMode() {
    document.body.style.animation = 'rainbow 2s infinite';
    setTimeout(() => {
        document.body.style.animation = '';
    }, 5000);
    
    console.log('%c🎮 KONAMI CODE ACTIVATED! 🎮', 'color: #ff006e; font-size: 24px; font-weight: bold;');
}

// Add rainbow animation
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);

// Mouse trail effect (subtle)
let mouseX = 0;
let mouseY = 0;
let trailElements = [];

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Throttle trail creation
    if (Math.random() > 0.9) {
        createTrail(mouseX, mouseY);
    }
});

function createTrail(x, y) {
    const trail = document.createElement('div');
    trail.style.position = 'fixed';
    trail.style.left = x + 'px';
    trail.style.top = y + 'px';
    trail.style.width = '4px';
    trail.style.height = '4px';
    trail.style.borderRadius = '50%';
    trail.style.background = 'radial-gradient(circle, rgba(0,255,159,0.6), transparent)';
    trail.style.pointerEvents = 'none';
    trail.style.zIndex = '9999';
    trail.style.animation = 'fadeOut 1s forwards';
    
    document.body.appendChild(trail);
    
    setTimeout(() => {
        trail.remove();
    }, 1000);
}

const fadeOutStyle = document.createElement('style');
fadeOutStyle.textContent = `
    @keyframes fadeOut {
        to {
            opacity: 0;
            transform: scale(0);
        }
    }
`;
document.head.appendChild(fadeOutStyle);
