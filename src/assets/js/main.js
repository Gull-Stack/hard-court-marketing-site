// Hard Court Marketing - Enhanced JavaScript for DreamLab Style
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initScrollAnimations();
    initMobileMenu();
    initSmoothScroll();
    initProgressBar();
    initScrollNavigation();
    initStatsAnimation();
    initParallax();
    initStaggeredAnimations();
});

// Enhanced Scroll Animations with Stagger Support
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                // Add delay for staggered animations
                const delay = entry.target.dataset.delay || 0;
                
                setTimeout(() => {
                    entry.target.classList.add('visible');
                    
                    // Trigger count-up animation for stats
                    if (entry.target.classList.contains('stat')) {
                        animateNumber(entry.target);
                    }
                }, delay);
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll(
        '.fade-in-up, .fade-in-left, .fade-in-right, .clip-reveal, .stat'
    );
    
    animatedElements.forEach(function(element) {
        observer.observe(element);
    });
}

// Staggered Animation Setup
function initStaggeredAnimations() {
    const gridContainers = document.querySelectorAll('.grid-3, .grid-4, .portfolio-grid, .pricing-grid');
    
    gridContainers.forEach(container => {
        const cards = container.querySelectorAll('.card, .portfolio-card, .pricing-card');
        
        cards.forEach((card, index) => {
            card.dataset.delay = index * 100; // 100ms stagger
            card.classList.add('fade-in-up');
        });
    });
}

// Progress Bar Animation
function initProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    
    if (progressBar) {
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            
            progressBar.style.width = scrollPercent + '%';
        });
    }
}

// Hide/Show Navigation on Scroll
function initScrollNavigation() {
    const header = document.querySelector('header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.classList.add('hidden');
        } else {
            // Scrolling up
            header.classList.remove('hidden');
        }
        
        // Update background opacity
        if (scrollTop > 100) {
            header.style.background = 'rgba(10, 10, 10, 0.98)';
        } else {
            header.style.background = 'rgba(10, 10, 10, 0.95)';
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
}

// Mobile Menu with Smooth Animation
function initMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', function() {
            navLinks.classList.toggle('mobile-active');
            
            // Animate toggle icon
            if (navLinks.classList.contains('mobile-active')) {
                mobileToggle.innerHTML = '✕';
                mobileToggle.style.transform = 'rotate(180deg)';
            } else {
                mobileToggle.innerHTML = '☰';
                mobileToggle.style.transform = 'rotate(0deg)';
            }
        });
        
        // Close menu when clicking on links
        const navItems = navLinks.querySelectorAll('a');
        navItems.forEach(function(item) {
            item.addEventListener('click', function() {
                navLinks.classList.remove('mobile-active');
                mobileToggle.innerHTML = '☰';
                mobileToggle.style.transform = 'rotate(0deg)';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('nav') && navLinks.classList.contains('mobile-active')) {
                navLinks.classList.remove('mobile-active');
                mobileToggle.innerHTML = '☰';
                mobileToggle.style.transform = 'rotate(0deg)';
            }
        });
    }
}

// Smooth Scrolling with Offset for Fixed Header
function initSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                e.preventDefault();
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Animated Number Counters
function animateNumber(element) {
    const numberElement = element.querySelector('h3');
    if (!numberElement) return;
    
    const finalNumber = numberElement.textContent;
    const numericValue = parseInt(finalNumber.replace(/[^\d]/g, ''));
    
    if (isNaN(numericValue)) return;
    
    let currentNumber = 0;
    const increment = numericValue / 60; // Animate over ~1 second (60 frames)
    const suffix = finalNumber.replace(/[\d,]/g, '');
    
    const timer = setInterval(() => {
        currentNumber += increment;
        
        if (currentNumber >= numericValue) {
            numberElement.textContent = finalNumber;
            clearInterval(timer);
        } else {
            const displayNumber = Math.floor(currentNumber);
            numberElement.textContent = displayNumber.toLocaleString() + suffix;
        }
    }, 16); // ~60fps
}

// Stats Animation Trigger
function initStatsAnimation() {
    const statsSection = document.querySelector('.stats');
    if (!statsSection) return;
    
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const statElements = entry.target.querySelectorAll('.stat');
                statElements.forEach((stat, index) => {
                    setTimeout(() => {
                        stat.classList.add('count-up');
                        animateNumber(stat);
                    }, index * 200);
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    statsObserver.observe(statsSection);
}

// Parallax Effects
function initParallax() {
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroHeight = hero ? hero.offsetHeight : 0;
        
        // Hero parallax
        if (hero && scrolled < heroHeight) {
            const parallaxSpeed = 0.5;
            hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        }
    });
}

// Enhanced Card Hover Effects
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card, .portfolio-card, .pricing-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });
});

// Clip Path Reveal Animation
function initClipReveal() {
    const clipElements = document.querySelectorAll('.clip-reveal');
    
    const clipObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                clipObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    clipElements.forEach(element => {
        clipObserver.observe(element);
    });
}

// Form Enhancement
function initFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(function(form) {
        const inputs = form.querySelectorAll('input, textarea, select');
        
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.style.transform = 'scale(1.02)';
                this.style.boxShadow = '0 0 0 3px rgba(240, 237, 230, 0.1)';
            });
            
            input.addEventListener('blur', function() {
                this.style.transform = 'scale(1)';
                this.style.boxShadow = 'none';
            });
        });
        
        form.addEventListener('submit', function(e) {
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(function(field) {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = '#ff6b6b';
                    field.style.boxShadow = '0 0 0 3px rgba(255, 107, 107, 0.2)';
                } else {
                    field.style.borderColor = '#f0ede6';
                    field.style.boxShadow = '0 0 0 3px rgba(240, 237, 230, 0.1)';
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                alert('Please fill in all required fields.');
            }
        });
    });
}

// Initialize form validation
document.addEventListener('DOMContentLoaded', initFormValidation);

// Performance optimization: Reduce animations on slower devices
function optimizeForPerformance() {
    // Detect slower devices
    const isSlowDevice = navigator.hardwareConcurrency < 4 || 
                        navigator.connection && navigator.connection.effectiveType === '2g';
    
    if (isSlowDevice) {
        document.body.classList.add('reduce-animations');
        
        // Add CSS to reduce animations
        const style = document.createElement('style');
        style.textContent = `
            .reduce-animations * {
                animation-duration: 0.3s !important;
                transition-duration: 0.3s !important;
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize performance optimizations
document.addEventListener('DOMContentLoaded', optimizeForPerformance);

// Intersection Observer polyfill for older browsers
if (!('IntersectionObserver' in window)) {
    // Fallback for older browsers
    document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .clip-reveal').forEach(el => {
        el.classList.add('visible');
    });
}