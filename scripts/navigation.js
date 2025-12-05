/**
 * Navigation Enhancement Script
 * Handles scroll detection and dropdown interactions
 */

(function() {
    'use strict';
    
    // Scroll detection for header
    const header = document.getElementById('header');
    let lastScroll = 0;
    let ticking = false;
    
    function updateHeader() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(updateHeader);
            ticking = true;
        }
    });
    
    // Dropdown keyboard accessibility
    const dropdownTriggers = document.querySelectorAll('.nav-item.has-dropdown > a');
    
    dropdownTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            // Allow normal navigation on mobile
            if (window.innerWidth > 1024) {
                const parent = this.parentElement;
                const isOpen = parent.classList.contains('dropdown-open');
                
                // Close all other dropdowns
                document.querySelectorAll('.nav-item.has-dropdown').forEach(item => {
                    item.classList.remove('dropdown-open');
                });
                
                // Toggle current dropdown
                if (!isOpen) {
                    parent.classList.add('dropdown-open');
                    e.preventDefault();
                }
            }
        });
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-item.has-dropdown')) {
            document.querySelectorAll('.nav-item.has-dropdown').forEach(item => {
                item.classList.remove('dropdown-open');
            });
        }
    });
    
    // Close dropdowns on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            document.querySelectorAll('.nav-item.has-dropdown').forEach(item => {
                item.classList.remove('dropdown-open');
            });
        }
    });
    
    // Initialize on page load
    updateHeader();
})();
