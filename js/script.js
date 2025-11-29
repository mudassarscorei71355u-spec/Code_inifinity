// Simple script for smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Category tab functionality
        document.addEventListener('DOMContentLoaded', function() {
            const categoryTabs = document.querySelectorAll('.category-tab');
            const categoryContents = document.querySelectorAll('.category-content');
            
            // Show first category by default
            categoryContents[0].style.display = 'grid';
            
            categoryTabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    const category = this.getAttribute('data-category');
                    
                    // Update active tab
                    categoryTabs.forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Show selected category content
                    categoryContents.forEach(content => {
                        content.style.display = 'none';
                    });
                    document.getElementById(`${category}-courses`).style.display = 'grid';
                });
            });
            
            // Add floating animation to course cards
            const courseCards = document.querySelectorAll('.course-card');
            courseCards.forEach((card, index) => {
                card.style.animationDelay = `${index * 0.2}s`;
            });
            
            // Mobile menu toggle
            const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
            const navLinks = document.querySelector('.nav-links');
            const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
            
            if (mobileMenuToggle && navLinks) {
                function toggleMobileMenu() {
                    mobileMenuToggle.classList.toggle('active');
                    navLinks.classList.toggle('active');
                    if (mobileMenuOverlay) {
                        mobileMenuOverlay.classList.toggle('active');
                    }
                    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
                    
                    // Change icon
                    const icon = mobileMenuToggle.querySelector('i');
                    if (icon) {
                        icon.classList.toggle('fa-bars');
                        icon.classList.toggle('fa-times');
                    }
                }
                
                mobileMenuToggle.addEventListener('click', toggleMobileMenu);
                
                if (mobileMenuOverlay) {
                    mobileMenuOverlay.addEventListener('click', toggleMobileMenu);
                }
                
                // Close menu when clicking on a link
                navLinks.querySelectorAll('a').forEach(link => {
                    link.addEventListener('click', () => {
                        if (navLinks.classList.contains('active')) {
                            toggleMobileMenu();
                        }
                    });
                });
                
                // Close menu on escape key
                document.addEventListener('keydown', (e) => {
                    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
                        toggleMobileMenu();
                    }
                });
            }
        });