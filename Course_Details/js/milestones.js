// Milestone View System - Extracts video data and creates timeline view
document.addEventListener('DOMContentLoaded', function() {
    let milestoneViewContainer = null;
    let isVisible = false;
    let currentMilestone = 0;
    let milestones = [];
    let autoPlayInterval = null;
    
    // Extract all video data from phases
    function extractMilestones() {
        milestones = [];
        const phaseSections = document.querySelectorAll('.phase-section');
        let globalVideoNumber = 1;
        
        phaseSections.forEach((phase) => {
            const videoCards = phase.querySelectorAll('.video-card');
            
            videoCards.forEach((card) => {
                const videoNumber = card.querySelector('.video-number')?.textContent.trim() || globalVideoNumber;
                const videoTitle = card.querySelector('.video-title')?.textContent.trim() || '';
                const topicsList = card.querySelectorAll('.video-topics li');
                const topics = [];
                
                topicsList.forEach((li) => {
                    const text = li.textContent.trim();
                    // Skip the "Watch Video" link
                    if (!text.includes('▶') && !text.includes('Watch Video')) {
                        topics.push(text);
                    }
                });
                
                if (videoTitle) {
                    milestones.push({
                        number: parseInt(videoNumber) || globalVideoNumber,
                        title: videoTitle,
                        topics: topics
                    });
                }
                
                globalVideoNumber++;
            });
        });
        
        return milestones;
    }
    
    // Create milestone view container
    function createMilestoneView() {
        if (milestoneViewContainer) return;
        
        milestoneViewContainer = document.createElement('div');
        milestoneViewContainer.className = 'milestone-view-container';
        milestoneViewContainer.style.display = 'none';
        
        milestoneViewContainer.innerHTML = `
            <div class="milestone-view-header">
                <h2 class="milestone-view-title">Video Wise Milestone View</h2>
                <button class="milestone-close-btn" aria-label="Close milestone view">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            
            <div class="milestone-progress-container">
                <div class="milestone-progress-bar">
                    <div class="milestone-progress" id="milestoneProgress"></div>
                </div>
                <div class="milestone-progress-text" id="milestoneProgressText">0/${milestones.length} Milestones</div>
            </div>
            
            <div class="milestone-roadmap-container">
                <div class="milestone-timeline"></div>
                <div class="milestone-timeline-dots" id="milestoneTimelineDots"></div>
                <div class="milestone-list" id="milestoneList"></div>
            </div>
            
            <div class="milestone-controls">
                <button id="milestonePrevBtn" class="milestone-control-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Previous
                </button>
                <button id="milestoneNextBtn" class="milestone-control-btn">
                    Next
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <button id="milestoneAutoBtn" class="milestone-control-btn milestone-control-btn-secondary">
                    <span id="milestoneAutoIcon">▶</span>
                    Auto Play
                </button>
            </div>
        `;
        
        document.body.appendChild(milestoneViewContainer);
        
        // Close button
        const closeBtn = milestoneViewContainer.querySelector('.milestone-close-btn');
        closeBtn.addEventListener('click', () => toggle());
        
        // Navigation buttons
        const prevBtn = milestoneViewContainer.querySelector('#milestonePrevBtn');
        const nextBtn = milestoneViewContainer.querySelector('#milestoneNextBtn');
        const autoBtn = milestoneViewContainer.querySelector('#milestoneAutoBtn');
        
        prevBtn.addEventListener('click', () => {
            if (currentMilestone > 0) {
                currentMilestone--;
                showMilestone(currentMilestone);
            }
        });
        
        nextBtn.addEventListener('click', () => {
            if (currentMilestone < milestones.length - 1) {
                currentMilestone++;
                showMilestone(currentMilestone);
            }
        });
        
        autoBtn.addEventListener('click', () => {
            if (autoPlayInterval) {
                clearInterval(autoPlayInterval);
                autoPlayInterval = null;
                autoBtn.innerHTML = '<span id="milestoneAutoIcon">▶</span> Auto Play';
            } else {
                autoPlayInterval = setInterval(() => {
                    if (currentMilestone < milestones.length - 1) {
                        currentMilestone++;
                        showMilestone(currentMilestone);
                    } else {
                        clearInterval(autoPlayInterval);
                        autoPlayInterval = null;
                        autoBtn.innerHTML = '<span id="milestoneAutoIcon">▶</span> Auto Play';
                    }
                }, 2000);
                autoBtn.innerHTML = '<span id="milestoneAutoIcon">⏸</span> Stop';
            }
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', handleKeyboard);
    }
    
    function handleKeyboard(e) {
        if (!isVisible) return;
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        
        if (e.key === 'ArrowRight' || e.key === ' ') {
            if (currentMilestone < milestones.length - 1) {
                e.preventDefault();
                currentMilestone++;
                showMilestone(currentMilestone);
            }
        } else if (e.key === 'ArrowLeft') {
            if (currentMilestone > 0) {
                e.preventDefault();
                currentMilestone--;
                showMilestone(currentMilestone);
            }
        } else if (e.key === 'Escape') {
            toggle();
        }
    }
    
    // Render milestones
    function renderMilestones() {
        const milestoneList = milestoneViewContainer.querySelector('#milestoneList');
        const timelineDots = milestoneViewContainer.querySelector('#milestoneTimelineDots');
        
        milestoneList.innerHTML = '';
        timelineDots.innerHTML = '';
        
        milestones.forEach((milestone, index) => {
            // Create milestone element
            const milestoneEl = document.createElement('div');
            milestoneEl.className = 'milestone-item';
            milestoneEl.innerHTML = `
                <div class="milestone-item-content">
                    <div class="milestone-item-header">
                        <div class="milestone-item-number">${milestone.number}</div>
                        <h3 class="milestone-item-title">${milestone.title}</h3>
                    </div>
                    <ul class="milestone-item-topics">
                        ${milestone.topics.map(topic => `<li>${topic}</li>`).join('')}
                    </ul>
                </div>
            `;
            milestoneList.appendChild(milestoneEl);
            
            // Create timeline dot
            const dot = document.createElement('div');
            dot.className = 'milestone-timeline-dot';
            dot.dataset.index = index;
            dot.addEventListener('click', () => {
                currentMilestone = index;
                showMilestone(currentMilestone);
            });
            timelineDots.appendChild(dot);
        });
        
        // Update dots position
        updateTimelineDots();
    }
    
    // Update timeline dots position
    function updateTimelineDots() {
        const milestoneItems = milestoneViewContainer.querySelectorAll('.milestone-item');
        const dots = milestoneViewContainer.querySelectorAll('.milestone-timeline-dot');
        
        milestoneItems.forEach((item, index) => {
            const dot = dots[index];
            if (dot) {
                const itemTop = item.offsetTop;
                const itemHeight = item.offsetHeight;
                dot.style.top = `${itemTop + (itemHeight / 2)}px`;
            }
        });
    }
    
    // Show specific milestone
    function showMilestone(index) {
        if (index < 0 || index >= milestones.length) return;
        
        currentMilestone = index;
        const milestoneItems = milestoneViewContainer.querySelectorAll('.milestone-item');
        const dots = milestoneViewContainer.querySelectorAll('.milestone-timeline-dot');
        
        milestoneItems.forEach((item, i) => {
            if (i <= index) {
                item.classList.add('visible');
            } else {
                item.classList.remove('visible');
            }
        });
        
        dots.forEach((dot, i) => {
            if (i <= index) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
        
        updateProgress();
        
        // Scroll to current milestone
        if (milestoneItems[index]) {
            milestoneItems[index].scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    }
    
    // Update progress
    function updateProgress() {
        const progress = milestoneViewContainer.querySelector('#milestoneProgress');
        const progressText = milestoneViewContainer.querySelector('#milestoneProgressText');
        
        if (progress && progressText) {
            const percentage = milestones.length > 0 ? (currentMilestone / (milestones.length - 1)) * 100 : 0;
            progress.style.width = `${percentage}%`;
            progressText.textContent = `${currentMilestone + 1}/${milestones.length} Milestones`;
        }
    }
    
    // Toggle milestone view
    function toggle() {
        if (!milestoneViewContainer) {
            extractMilestones();
            createMilestoneView();
            renderMilestones();
        }
        
        isVisible = !isVisible;
        
        if (isVisible) {
            milestoneViewContainer.style.display = 'block';
            document.body.style.overflow = 'hidden';
            currentMilestone = 0;
            showMilestone(currentMilestone);
            
            // Update dots position after render
            setTimeout(() => {
                updateTimelineDots();
            }, 100);
        } else {
            milestoneViewContainer.style.display = 'none';
            document.body.style.overflow = '';
            if (autoPlayInterval) {
                clearInterval(autoPlayInterval);
                autoPlayInterval = null;
            }
        }
    }
    
    // Make toggle available globally
    window.milestoneViewInstance = {
        toggle: toggle
    };
    
    // Handle window resize
    window.addEventListener('resize', () => {
        if (isVisible) {
            updateTimelineDots();
        }
    });
});

