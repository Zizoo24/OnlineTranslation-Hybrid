document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', function() {
            setTimeout(function() {
                preloader.classList.add('hidden');
            }, 500);
        });
        setTimeout(function() {
            preloader.classList.add('hidden');
        }, 3000);
    }

    // Header Scroll Effect
    const header = document.querySelector('.header-desktop');
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (header) {
            if (currentScroll > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
        
        // Back to Top Button
        if (backToTop) {
            if (currentScroll > 500) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }
    });
    
    // Back to Top Click
    if (backToTop) {
        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Sidebar Menu
    const sidebarMenu = document.getElementById('menu-sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const footerMenuToggle = document.getElementById('footerMenuToggle');
    const sidebarClose = document.getElementById('sidebarClose');
    
    function openSidebar() {
        if (sidebarMenu) sidebarMenu.classList.add('active');
        if (sidebarOverlay) sidebarOverlay.classList.add('active');
        document.body.classList.add('menu-open');
    }
    
    function closeSidebar() {
        if (sidebarMenu) sidebarMenu.classList.remove('active');
        if (sidebarOverlay) sidebarOverlay.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
    
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function(e) {
            e.preventDefault();
            openSidebar();
        });
    }
    
    if (footerMenuToggle) {
        footerMenuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            openSidebar();
        });
    }
    
    if (sidebarClose) {
        sidebarClose.addEventListener('click', closeSidebar);
    }
    
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', closeSidebar);
    }
    
    // Close sidebar on link click
    const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
    sidebarLinks.forEach(function(link) {
        link.addEventListener('click', closeSidebar);
    });

    // Search Overlay
    const searchOverlay = document.getElementById('search-overlay');
    const searchToggle = document.getElementById('searchToggle');
    const searchClose = document.getElementById('searchClose');
    const searchInput = document.getElementById('searchInput');
    
    function openSearch() {
        if (searchOverlay) {
            searchOverlay.classList.add('active');
            document.body.classList.add('search-open');
            if (searchInput) {
                setTimeout(function() {
                    searchInput.focus();
                }, 300);
            }
        }
    }
    
    function closeSearch() {
        if (searchOverlay) {
            searchOverlay.classList.remove('active');
            document.body.classList.remove('search-open');
        }
    }
    
    if (searchToggle) {
        searchToggle.addEventListener('click', function(e) {
            e.preventDefault();
            openSearch();
        });
    }
    
    if (searchClose) {
        searchClose.addEventListener('click', closeSearch);
    }
    
    // Escape key handler
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeSearch();
            closeSidebar();
        }
    });

    // Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;
    const body = document.body;
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.remove('theme-light');
        body.classList.add('theme-dark');
        if (themeIcon) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function(e) {
            e.preventDefault();
            body.classList.toggle('theme-light');
            body.classList.toggle('theme-dark');
            
            const isDark = body.classList.contains('theme-dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            
            if (themeIcon) {
                if (isDark) {
                    themeIcon.classList.remove('fa-moon');
                    themeIcon.classList.add('fa-sun');
                } else {
                    themeIcon.classList.remove('fa-sun');
                    themeIcon.classList.add('fa-moon');
                }
            }
        });
    }

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(function(item) {
        const question = item.querySelector('.faq-question');
        
        if (question) {
            question.addEventListener('click', function() {
                const isActive = item.classList.contains('active');
                
                faqItems.forEach(function(otherItem) {
                    otherItem.classList.remove('active');
                });
                
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerHeight = window.innerWidth > 991 ? 100 : 75;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Contact Form - WhatsApp Redirect
    const contactForms = document.querySelectorAll('.contact-form');
    
    contactForms.forEach(function(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(form);
            const name = formData.get('name') || '';
            const email = formData.get('email') || '';
            const phone = formData.get('phone') || '';
            const message = formData.get('message') || '';
            
            let whatsappMessage = `Hello OnlineTranslation.ae!\n\n`;
            if (name) whatsappMessage += `Name: ${name}\n`;
            if (email) whatsappMessage += `Email: ${email}\n`;
            if (phone) whatsappMessage += `Phone: ${phone}\n`;
            if (message) whatsappMessage += `\nMessage:\n${message}`;
            
            window.open(`https://wa.me/971508620217?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
            form.reset();
        });
    });

    // Footer Navigation Active State
    const footerItems = document.querySelectorAll('.footer-item');
    
    footerItems.forEach(function(item) {
        item.addEventListener('click', function() {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                footerItems.forEach(function(fi) {
                    fi.classList.remove('active-nav');
                });
                this.classList.add('active-nav');
            }
        });
    });

    // Service Worker Registration
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            navigator.serviceWorker.register('/service-worker.js')
                .then(function(registration) {
                    console.log('ServiceWorker registered');
                })
                .catch(function(err) {
                    console.log('ServiceWorker registration failed');
                });
        });
    }

    // PWA Install Prompt
    let deferredPrompt;
    window.addEventListener('beforeinstallprompt', function(e) {
        e.preventDefault();
        deferredPrompt = e;
    });

    // Resize Handler
    function handleResize() {
        if (window.innerWidth > 991) {
            closeSidebar();
            closeSearch();
        }
    }
    window.addEventListener('resize', handleResize);

    // Intersection Observer for Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Animated Elements
    const animatedElements = document.querySelectorAll('.service-card, .feature-card, .why-card, .testimonial-card, .process-step, .stats-item');
    animatedElements.forEach(function(el, index) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
    
    // Counter Animation
    const counters = document.querySelectorAll('.stats-item .number');
    
    function animateCounter(el) {
        const target = el.innerText;
        const hasPlus = target.includes('+');
        const hasPercent = target.includes('%');
        const hasHr = target.includes('hr');
        
        let numericValue = parseInt(target.replace(/[^0-9]/g, ''));
        if (isNaN(numericValue)) return;
        
        let current = 0;
        const increment = numericValue / 50;
        const duration = 2000;
        const stepTime = duration / 50;
        
        function updateCounter() {
            current += increment;
            if (current < numericValue) {
                let displayValue = Math.floor(current);
                if (hasPlus) displayValue = displayValue.toLocaleString() + '+';
                else if (hasPercent) displayValue = displayValue + '%';
                else if (hasHr) displayValue = displayValue + '-' + (displayValue + 2) + 'hr';
                else displayValue = displayValue.toLocaleString();
                
                el.innerText = displayValue;
                setTimeout(updateCounter, stepTime);
            } else {
                el.innerText = target;
            }
        }
        
        updateCounter();
    }
    
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(function(counter) {
        counterObserver.observe(counter);
    });
    
    // Hover Effects Enhancement
    const cards = document.querySelectorAll('.service-card, .feature-card, .why-card');
    cards.forEach(function(card) {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-12px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Active Navigation Highlight
    function updateActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 150;
        
        sections.forEach(function(section) {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            
            if (scrollPos >= top && scrollPos < top + height) {
                document.querySelectorAll('.nav-menu a, .sidebar-nav a').forEach(function(link) {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();
});
