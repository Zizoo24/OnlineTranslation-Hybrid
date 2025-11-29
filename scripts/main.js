document.addEventListener('DOMContentLoaded', function() {
    // Device Detection - iOS, iPadOS, macOS, Android
    (function detectDevice() {
        const ua = navigator.userAgent.toLowerCase();
        const platform = navigator.platform;
        const body = document.body;
        
        // iOS detection (iPhone, iPod)
        const isIPhone = /iphone|ipod/.test(ua);
        
        // iPad detection (including iPadOS 13+ which reports as Mac)
        const isIPad = /ipad/.test(ua) || 
            (platform === 'MacIntel' && navigator.maxTouchPoints > 1);
        
        // Combined iOS/iPadOS
        const isIOS = isIPhone || isIPad;
        
        // macOS detection (Mac without touch = real Mac)
        const isMac = /mac/.test(platform.toLowerCase()) && 
            navigator.maxTouchPoints === 0;
        
        // Android detection
        const isAndroid = /android/.test(ua);
        
        // Apply device classes
        if (isIOS) {
            body.classList.add('os-ios');
            if (isIPhone) body.classList.add('device-iphone');
            if (isIPad) body.classList.add('device-ipad');
            
            // Show iOS-specific elements
            document.querySelectorAll('.os-ios-only').forEach(function(el) {
                el.style.display = '';
            });
            // Hide Android-specific elements
            document.querySelectorAll('.os-android-only').forEach(function(el) {
                el.style.display = 'none';
            });
        } else if (isAndroid) {
            body.classList.add('os-android');
            
            // Show Android-specific elements
            document.querySelectorAll('.os-android-only').forEach(function(el) {
                el.style.display = '';
            });
            // Hide iOS-specific elements
            document.querySelectorAll('.os-ios-only').forEach(function(el) {
                el.style.display = 'none';
            });
        } else if (isMac) {
            body.classList.add('os-macos');
        }
        
        // Touch device detection
        if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
            body.classList.add('touch-device');
        } else {
            body.classList.add('pointer-device');
        }
        
        // Standalone PWA detection (installed as app)
        if (window.matchMedia('(display-mode: standalone)').matches || 
            window.navigator.standalone === true) {
            body.classList.add('pwa-standalone');
        }
    })();

    // Preloader - instant hide
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.classList.add('hidden');
    }

    // Touch-Friendly Dropdown Navigation
    // On touch devices, first tap opens dropdown, second tap follows link
    (function initTouchDropdowns() {
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        
        if (isTouchDevice) {
            const dropdownItems = document.querySelectorAll('.nav-item.has-dropdown');
            
            dropdownItems.forEach(function(item) {
                const link = item.querySelector('.nav-link');
                const dropdown = item.querySelector('.dropdown-menu');
                
                if (link && dropdown) {
                    link.addEventListener('click', function(e) {
                        // Check if dropdown is already open
                        const isOpen = item.classList.contains('dropdown-open');
                        
                        // Close all other dropdowns first
                        dropdownItems.forEach(function(otherItem) {
                            if (otherItem !== item) {
                                otherItem.classList.remove('dropdown-open');
                            }
                        });
                        
                        if (!isOpen) {
                            // First tap: open dropdown, prevent navigation
                            e.preventDefault();
                            item.classList.add('dropdown-open');
                        }
                        // Second tap: allow navigation (don't prevent default)
                    });
                }
            });
            
            // Close dropdowns when clicking outside
            document.addEventListener('click', function(e) {
                if (!e.target.closest('.nav-item.has-dropdown')) {
                    dropdownItems.forEach(function(item) {
                        item.classList.remove('dropdown-open');
                    });
                }
            });
        }
    })();

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
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    
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
    
    // Desktop menu toggle (hamburger button)
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function(e) {
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
    
    // Check URL parameter for theme (for testing: ?theme=dark)
    const urlParams = new URLSearchParams(window.location.search);
    const urlTheme = urlParams.get('theme');
    
    // Priority: URL param > localStorage > default light
    const savedTheme = urlTheme || localStorage.getItem('theme');
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

    // Contact Form - Email via Web3Forms + WhatsApp
    const contactForms = document.querySelectorAll('.contact-form');
    
    contactForms.forEach(function(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(form);
            const name = formData.get('name') || '';
            const email = formData.get('email') || '';
            const phone = formData.get('phone') || '';
            const message = formData.get('message') || '';
            const resultDiv = form.querySelector('#formResult') || document.getElementById('formResult');
            const submitBtn = form.querySelector('button[type="submit"]');
            
            // Show loading state
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Sending...';
            }
            if (resultDiv) resultDiv.innerHTML = '';
            
            // Prepare WhatsApp message
            let whatsappMessage = `Hello OnlineTranslation.ae!\n\n`;
            if (name) whatsappMessage += `Name: ${name}\n`;
            if (email) whatsappMessage += `Email: ${email}\n`;
            if (phone) whatsappMessage += `Phone: ${phone}\n`;
            if (message) whatsappMessage += `\nMessage:\n${message}`;
            
            // Send to Web3Forms
            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);
            
            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            })
            .then(async function(response) {
                const data = await response.json();
                if (response.status === 200) {
                    if (resultDiv) {
                        resultDiv.innerHTML = '<span class="success">Message sent successfully! We\'ll respond shortly.</span>';
                    }
                    form.reset();
                    // Also open WhatsApp for immediate contact
                    window.open(`https://wa.me/971508620217?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
                } else {
                    if (resultDiv) {
                        resultDiv.innerHTML = '<span class="error">Failed to send. Please use WhatsApp instead.</span>';
                    }
                    // Fallback to WhatsApp only
                    window.open(`https://wa.me/971508620217?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
                }
            })
            .catch(function(error) {
                if (resultDiv) {
                    resultDiv.innerHTML = '<span class="error">Connection error. Opening WhatsApp instead...</span>';
                }
                // Fallback to WhatsApp
                window.open(`https://wa.me/971508620217?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
                form.reset();
            })
            .finally(function() {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Submit Request';
                }
            });
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

    // ============================================
    // EXODUS SCROLL ANIMATIONS - Intersection Observer
    // ============================================
    (function initScrollAnimations() {
        // Elements to animate on scroll
        const animateElements = document.querySelectorAll(
            '.section-header, .service-card, .feature-card, .overlap-card, ' +
            '.team-card, .process-step, .language-card, .testimonial-card, ' +
            '.about-content, .about-image, .cta-section, .services-grid > *, ' +
            '.locations-grid > *, .industries-grid > *, .resources-grid > *'
        );

        // Add scroll-animate class to elements
        animateElements.forEach(function(el, index) {
            if (!el.classList.contains('scroll-animate')) {
                el.classList.add('scroll-animate');
                // Add stagger delay based on position in parent
                const delay = (index % 6) + 1;
                el.setAttribute('data-delay', delay);
            }
        });

        // Intersection Observer for scroll animations
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -50px 0px',
            threshold: 0.1
        };

        const animationObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // Optional: unobserve after animation
                    // animationObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe all animate elements
        document.querySelectorAll('.scroll-animate').forEach(function(el) {
            animationObserver.observe(el);
        });

        // Trigger visible elements on load
        setTimeout(function() {
            document.querySelectorAll('.scroll-animate').forEach(function(el) {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    el.classList.add('is-visible');
                }
            });
        }, 100);
    })();
});
