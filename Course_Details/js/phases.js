// Phase Management System for 5 Phases
document.addEventListener('DOMContentLoaded', function() {
    const phaseSections = document.querySelectorAll('.phase-section');
    let currentPhase = 0;
    
    // Initialize: Hide all phases except the first one and add navigation buttons
    function initializePhases() {
        phaseSections.forEach((phase, index) => {
            if (index === 0) {
                phase.style.display = 'block';
                phase.classList.add('active');
            } else {
                phase.style.display = 'none';
                phase.classList.remove('active');
            }
            
            // Remove existing buttons and add new navigation
            const existingBtns = phase.querySelectorAll('.next-phase-btn, .prev-phase-btn');
            existingBtns.forEach(btn => btn.remove());
            
            // Create button container
            const btnContainer = document.createElement('div');
            btnContainer.className = 'phase-btn-container';
            btnContainer.style.cssText = `
                display: flex;
                justify-content: space-between;
                gap: 1rem;
                margin-top: 2rem;
                flex-wrap: wrap;
            `;
            
            // Add Previous Phase button (not on first phase)
            if (index > 0) {
                const prevBtn = document.createElement('button');
                prevBtn.className = 'prev-phase-btn';
                prevBtn.innerHTML = '<i class="fas fa-arrow-left"></i> Previous Phase';
                prevBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    showPhase(index - 1);
                });
                btnContainer.appendChild(prevBtn);
            } else {
                // Add empty placeholder for alignment
                const placeholder = document.createElement('div');
                btnContainer.appendChild(placeholder);
            }
            
            // Add Next Phase button (not on last phase)
            if (index < phaseSections.length - 1) {
                const nextBtn = document.createElement('button');
                nextBtn.className = 'next-phase-btn';
                nextBtn.innerHTML = 'Next Phase <i class="fas fa-arrow-right"></i>';
                nextBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    showPhase(index + 1);
                });
                btnContainer.appendChild(nextBtn);
            }
            
            // Add Milestone View button after Next Phase button (on all phases)
            const milestoneBtn = document.createElement('button');
            milestoneBtn.className = 'milestone-view-btn';
            milestoneBtn.innerHTML = '<i class="fas fa-list-check"></i> Video Wise Milestone View';
            milestoneBtn.addEventListener('click', (e) => {
                e.preventDefault();
                toggleMilestoneView();
            });
            btnContainer.appendChild(milestoneBtn);
            
            // Insert button container at end of phase section
            phase.appendChild(btnContainer);
        });
    }
    
    // Show specific phase
    function showPhase(phaseIndex) {
        if (phaseIndex < 0 || phaseIndex >= phaseSections.length) return;
        
        phaseSections.forEach((phase, index) => {
            if (index === phaseIndex) {
                phase.style.display = 'block';
                phase.classList.add('active');
                
                // Smooth scroll to phase
                setTimeout(() => {
                    phase.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'start' 
                    });
                }, 100);
            } else {
                phase.style.display = 'none';
                phase.classList.remove('active');
            }
        });
        
        currentPhase = phaseIndex;
        updateDots();
        updateProgress();
    }
    
    // Make showPhase accessible globally
    window.showPhase = showPhase;
    
    // Add phase navigation with keyboard
    document.addEventListener('keydown', function(e) {
        // Only trigger if not typing in an input
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            if (currentPhase < phaseSections.length - 1) {
                e.preventDefault();
                showPhase(currentPhase + 1);
            }
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            if (currentPhase > 0) {
                e.preventDefault();
                showPhase(currentPhase - 1);
            }
        }
    });
    
    // Phase navigation dots (fixed on right side)
    let navWrapper = null;
    
    function createPhaseNavigation() {
        const playlistContainer = document.querySelector('.playlist-container');
        if (!playlistContainer) return;
        
        navWrapper = document.createElement('div');
        navWrapper.className = 'phase-navigation';
        navWrapper.style.cssText = `
            position: fixed;
            right: 2rem;
            top: 50%;
            transform: translateY(-50%);
            z-index: 100;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            background: rgba(0, 0, 0, 0.5);
            padding: 1rem 0.75rem;
            border-radius: 20px;
            backdrop-filter: blur(10px);
        `;
        
        // Create dots for each phase (only 5 dots for 5 phases)
        phaseSections.forEach((phase, index) => {
            const dot = document.createElement('button');
            dot.className = 'phase-dot';
            dot.setAttribute('data-phase', index);
            dot.setAttribute('aria-label', `Go to Phase ${index + 1}`);
            dot.setAttribute('title', `Phase ${index + 1}`);
            dot.style.cssText = `
                width: 14px;
                height: 14px;
                border-radius: 50%;
                border: 2px solid var(--neon-cyan);
                background: ${index === 0 ? 'var(--neon-cyan)' : 'transparent'};
                cursor: pointer;
                transition: all 0.3s ease;
                padding: 0;
            `;
            
            dot.addEventListener('click', () => showPhase(index));
            dot.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.3)';
                this.style.boxShadow = '0 0 10px var(--shadow-glow)';
            });
            dot.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
                if (parseInt(this.getAttribute('data-phase')) !== currentPhase) {
                    this.style.boxShadow = 'none';
                }
            });
            
            navWrapper.appendChild(dot);
        });
        
        document.body.appendChild(navWrapper);
        
        // Hide navigation on mobile
        updateNavVisibility();
        window.addEventListener('resize', updateNavVisibility);
    }
    
    function updateNavVisibility() {
        if (!navWrapper) return;
        if (window.innerWidth <= 768) {
            navWrapper.style.display = 'none';
        } else {
            navWrapper.style.display = 'flex';
        }
    }
    
    function updateDots() {
        if (!navWrapper) return;
        const dots = navWrapper.querySelectorAll('.phase-dot');
        dots.forEach((dot, index) => {
            if (index === currentPhase) {
                dot.style.background = 'var(--neon-cyan)';
                dot.style.boxShadow = '0 0 10px var(--shadow-glow)';
            } else {
                dot.style.background = 'transparent';
                dot.style.boxShadow = 'none';
            }
        });
    }
    
    // Progress bar at top
    let progressBar = null;
    
    function createProgressIndicator() {
        progressBar = document.createElement('div');
        progressBar.className = 'phase-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            height: 4px;
            background: linear-gradient(90deg, var(--neon-cyan), var(--neon-pink));
            z-index: 1001;
            transition: width 0.3s ease;
            width: ${((currentPhase + 1) / phaseSections.length) * 100}%;
        `;
        document.body.appendChild(progressBar);
    }
    
    function updateProgress() {
        if (!progressBar) return;
        const progress = ((currentPhase + 1) / phaseSections.length) * 100;
        progressBar.style.width = `${progress}%`;
    }
    
    // Initialize everything
    initializePhases();
    createPhaseNavigation();
    createProgressIndicator();
    
    // Make toggleMilestoneView available globally (will be defined in milestones.js)
    window.toggleMilestoneView = function() {
        if (window.milestoneViewInstance) {
            window.milestoneViewInstance.toggle();
        }
    };
});
