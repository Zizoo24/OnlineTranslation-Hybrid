document.addEventListener('DOMContentLoaded', function() {
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

    const header = document.querySelector('.header-desktop');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (header) {
            if (currentScroll > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
        
        lastScroll = currentScroll;
    });

    const sidebarMenu = document.getElementById('menu-sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const footerMenuToggle = document.getElementById('footerMenuToggle');
    const sidebarClose = document.getElementById('sidebarClose');
    
    function openSidebar() {
        sidebarMenu.classList.add('active');
        sidebarOverlay.classList.add('active');
        document.body.classList.add('menu-open');
    }
    
    function closeSidebar() {
        sidebarMenu.classList.remove('active');
        sidebarOverlay.classList.remove('active');
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
        sidebarClose.addEventListener('click', function() {
            closeSidebar();
        });
    }
    
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', function() {
            closeSidebar();
        });
    }
    
    const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
    sidebarLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            closeSidebar();
        });
    });

    const searchOverlay = document.getElementById('search-overlay');
    const searchToggle = document.getElementById('searchToggle');
    const searchClose = document.getElementById('searchClose');
    const searchInput = document.getElementById('searchInput');
    
    function openSearch() {
        searchOverlay.classList.add('active');
        document.body.classList.add('search-open');
        if (searchInput) {
            setTimeout(function() {
                searchInput.focus();
            }, 300);
        }
    }
    
    function closeSearch() {
        searchOverlay.classList.remove('active');
        document.body.classList.remove('search-open');
    }
    
    if (searchToggle) {
        searchToggle.addEventListener('click', function(e) {
            e.preventDefault();
            openSearch();
        });
    }
    
    if (searchClose) {
        searchClose.addEventListener('click', function() {
            closeSearch();
        });
    }
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeSearch();
            closeSidebar();
        }
    });

    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.remove('theme-light');
        body.classList.add('theme-dark');
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function(e) {
            e.preventDefault();
            body.classList.toggle('theme-light');
            body.classList.toggle('theme-dark');
            
            const isDark = body.classList.contains('theme-dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }

    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(function(item) {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            faqItems.forEach(function(otherItem) {
                otherItem.classList.remove('active');
            });
            
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerHeight = window.innerWidth > 991 ? 100 : 70;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            const whatsappMessage = encodeURIComponent(
                `Hello OnlineTranslation.ae!\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
            );
            
            window.open(`https://wa.me/971508620217?text=${whatsappMessage}`, '_blank');
            
            contactForm.reset();
        });
    }

    const footerItems = document.querySelectorAll('.footer-item');
    
    footerItems.forEach(function(item) {
        item.addEventListener('click', function() {
            footerItems.forEach(function(fi) {
                fi.classList.remove('active-nav');
            });
            
            if (!this.classList.contains('external-link')) {
                this.classList.add('active-nav');
            }
        });
    });

    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            navigator.serviceWorker.register('/service-worker.js')
                .then(function(registration) {
                    console.log('ServiceWorker registration successful');
                })
                .catch(function(err) {
                    console.log('ServiceWorker registration failed: ', err);
                });
        });
    }

    let deferredPrompt;
    
    window.addEventListener('beforeinstallprompt', function(e) {
        e.preventDefault();
        deferredPrompt = e;
    });

    function isMobile() {
        return window.innerWidth <= 991;
    }
    
    function handleResize() {
        if (!isMobile()) {
            closeSidebar();
            closeSearch();
        }
    }
    
    window.addEventListener('resize', handleResize);

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.service-card, .feature-card, .why-card, .testimonial-card, .process-step').forEach(function(el) {
        el.style.opacity = '0';
        observer.observe(el);
    });
});
