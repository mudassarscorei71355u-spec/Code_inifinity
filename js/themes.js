// Theme Management System
document.addEventListener('DOMContentLoaded', function() {
    // Get saved theme or default to 'neon-nexus'
    const savedTheme = localStorage.getItem('theme') || 'neon-nexus';
    
    // Apply theme
    function applyTheme(theme) {
        // Remove all theme attributes first
        document.documentElement.removeAttribute('data-theme');
        
        // Only set data-theme if it's not the default (neon-nexus)
        if (theme && theme !== 'neon-nexus') {
            document.documentElement.setAttribute('data-theme', theme);
        }
        
        localStorage.setItem('theme', theme || 'neon-nexus');
        
        // Update theme dropdown active state
        const themeOptions = document.querySelectorAll('.theme-option');
        themeOptions.forEach(option => {
            option.classList.remove('active');
            if (option.getAttribute('data-theme') === theme) {
                option.classList.add('active');
            }
        });
        
        // Update current indicator
        const currentIndicators = document.querySelectorAll('.current-indicator');
        currentIndicators.forEach(indicator => {
            indicator.textContent = '';
        });
        
        const activeOption = document.querySelector(`.theme-option[data-theme="${theme}"]`);
        if (activeOption) {
            const indicator = activeOption.querySelector('.current-indicator');
            if (indicator) {
                indicator.textContent = '(current)';
            } else {
                const newIndicator = document.createElement('span');
                newIndicator.className = 'current-indicator';
                newIndicator.textContent = '(current)';
                activeOption.appendChild(newIndicator);
            }
        }
    }
    
    // Close all dropdowns
    function closeAllDropdowns() {
        document.querySelectorAll('.dropdown.active').forEach(dropdown => {
            dropdown.classList.remove('active');
        });
        // Remove mobile backdrop if exists
        const backdrop = document.querySelector('.dropdown-backdrop');
        if (backdrop) {
            backdrop.remove();
        }
    }
    
    // Create mobile backdrop
    function createMobileBackdrop() {
        // Only create backdrop on mobile
        if (window.innerWidth > 480) return;
        
        // Remove existing backdrop
        const existingBackdrop = document.querySelector('.dropdown-backdrop');
        if (existingBackdrop) existingBackdrop.remove();
        
        const backdrop = document.createElement('div');
        backdrop.className = 'dropdown-backdrop';
        backdrop.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            z-index: 999;
            backdrop-filter: blur(4px);
            -webkit-backdrop-filter: blur(4px);
        `;
        backdrop.addEventListener('click', closeAllDropdowns);
        document.body.appendChild(backdrop);
    }
    
    // Initialize theme dropdowns
    function initializeThemeDropdowns() {
        const themeDropdowns = document.querySelectorAll('.theme-dropdown');
        
        themeDropdowns.forEach(dropdown => {
            const toggle = dropdown.querySelector('.dropdown-toggle');
            const themeOptions = dropdown.querySelectorAll('.theme-option');
            
            // Toggle dropdown
            if (toggle) {
                toggle.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const isActive = dropdown.classList.contains('active');
                    closeAllDropdowns();
                    if (!isActive) {
                        dropdown.classList.add('active');
                        createMobileBackdrop();
                    }
                });
            }
            
            // Handle theme selection
            themeOptions.forEach(option => {
                option.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const theme = this.getAttribute('data-theme');
                    applyTheme(theme);
                    closeAllDropdowns();
                });
            });
        });
    }
    
    // Initialize regular dropdowns (Courses dropdown)
    function initializeDropdowns() {
        const dropdowns = document.querySelectorAll('.dropdown:not(.theme-dropdown)');
        
        dropdowns.forEach(dropdown => {
            const toggle = dropdown.querySelector('.dropdown-toggle');
            
            if (toggle) {
                toggle.addEventListener('click', function(e) {
                    e.stopPropagation();
                    e.preventDefault();
                    const isActive = dropdown.classList.contains('active');
                    closeAllDropdowns();
                    if (!isActive) {
                        dropdown.classList.add('active');
                        // Only create backdrop on desktop, not in mobile menu
                        if (window.innerWidth > 768) {
                            createMobileBackdrop();
                        }
                    }
                });
            }
            
            // Close dropdown when clicking on a link inside
            const links = dropdown.querySelectorAll('.dropdown-item[href]');
            links.forEach(link => {
                link.addEventListener('click', function() {
                    closeAllDropdowns();
                    // Close mobile menu if open
                    const navLinks = document.querySelector('.nav-links');
                    if (navLinks && navLinks.classList.contains('active')) {
                        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
                        if (mobileMenuToggle) {
                            mobileMenuToggle.click();
                        }
                    }
                });
            });
        });
    }
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            closeAllDropdowns();
        }
    });
    
    // Close dropdowns on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeAllDropdowns();
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        const backdrop = document.querySelector('.dropdown-backdrop');
        if (backdrop && window.innerWidth > 480) {
            backdrop.remove();
        }
    });
    
    // Apply saved theme
    applyTheme(savedTheme);
    
    // Initialize dropdowns
    initializeThemeDropdowns();
    initializeDropdowns();
});

