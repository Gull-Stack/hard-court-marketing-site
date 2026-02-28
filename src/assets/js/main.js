// Hard Court Marketing — Minimal JS
document.addEventListener('DOMContentLoaded', function() {
  initScrollAnimations();
  initMobileMenu();
  initProgressBar();
  initScrollNav();
  initStatsAnimation();
});

// Scroll-triggered animations
function initScrollAnimations() {
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(function() {
          entry.target.classList.add('visible');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -40px 0px', threshold: 0.1 });

  document.querySelectorAll('.fade-in-up, .fade-in-left, .reveal-text').forEach(function(el) {
    observer.observe(el);
  });

  // Stagger children in project list and services
  document.querySelectorAll('.project-item, .service-item, .testimonial-item').forEach(function(item, i) {
    item.dataset.delay = i * 80;
    if (!item.classList.contains('fade-in-up')) {
      item.classList.add('fade-in-up');
      observer.observe(item);
    }
  });
}

// Progress bar
function initProgressBar() {
  var bar = document.getElementById('progress-bar');
  if (!bar) return;
  window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset;
    var docHeight = document.body.scrollHeight - window.innerHeight;
    bar.style.width = (scrollTop / docHeight * 100) + '%';
  });
}

// Hide/show nav on scroll
function initScrollNav() {
  var header = document.querySelector('header');
  var lastY = 0;
  window.addEventListener('scroll', function() {
    var y = window.pageYOffset;
    if (y > lastY && y > 80) {
      header.classList.add('hidden');
    } else {
      header.classList.remove('hidden');
    }
    lastY = y <= 0 ? 0 : y;
  });
}

// Mobile menu
function initMobileMenu() {
  var toggle = document.querySelector('.mobile-menu-toggle');
  var nav = document.querySelector('.nav-links');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function() {
    nav.classList.toggle('mobile-active');
    toggle.textContent = nav.classList.contains('mobile-active') ? 'Close' : 'Menu';
  });

  nav.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
      nav.classList.remove('mobile-active');
      toggle.textContent = 'Menu';
    });
  });
}

// Animate stat numbers
function initStatsAnimation() {
  var statsSection = document.querySelector('.stats');
  if (!statsSection) return;

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.stat').forEach(function(stat, i) {
          setTimeout(function() {
            stat.classList.add('visible');
            animateNumber(stat);
          }, i * 150);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(statsSection);
}

function animateNumber(el) {
  var h3 = el.querySelector('h3');
  if (!h3) return;
  var final = h3.textContent;
  var num = parseInt(final.replace(/[^\d]/g, ''));
  if (isNaN(num)) return;
  var suffix = final.replace(/[\d,]/g, '');
  var current = 0;
  var step = num / 50;
  var timer = setInterval(function() {
    current += step;
    if (current >= num) {
      h3.textContent = final;
      clearInterval(timer);
    } else {
      h3.textContent = Math.floor(current).toLocaleString() + suffix;
    }
  }, 20);
}

// Form validation
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('form').forEach(function(form) {
    form.addEventListener('submit', function(e) {
      var valid = true;
      form.querySelectorAll('[required]').forEach(function(f) {
        if (!f.value.trim()) {
          valid = false;
          f.style.borderColor = 'rgba(255,100,100,0.6)';
        } else {
          f.style.borderColor = 'rgba(255,255,255,0.12)';
        }
      });
      if (!valid) {
        e.preventDefault();
      }
    });
  });
});