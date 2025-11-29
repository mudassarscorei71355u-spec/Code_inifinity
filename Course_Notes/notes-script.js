// Shared JavaScript for Course Notes
document.addEventListener('DOMContentLoaded', function() {
    // Toggle dropdown functionality
    const headers = document.querySelectorAll('.topic-header');
    headers.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const isActive = this.classList.contains('active');
            
            // Optional: Close all other dropdowns (uncomment if desired)
            // headers.forEach(h => {
            //     if (h !== this) {
            //         h.classList.remove('active');
            //         h.nextElementSibling.classList.remove('active');
            //     }
            // });
            
            // Toggle current dropdown
            if (isActive) {
                this.classList.remove('active');
                content.classList.remove('active');
            } else {
                this.classList.add('active');
                content.classList.add('active');
            }
        });
    });
    
    // Generate Table of Contents
    function generateTOC() {
        const videoSections = document.querySelectorAll('.video-section');
        const tocList = document.getElementById('toc-list');
        
        if (!tocList || videoSections.length === 0) return;
        
        videoSections.forEach((section, index) => {
            const titleEl = section.querySelector('.video-title');
            const videoNumEl = section.querySelector('.video-number');
            
            if (titleEl && videoNumEl) {
                const title = titleEl.textContent;
                const videoNum = videoNumEl.textContent;
                const sectionId = section.id || `video-${index + 1}`;
                section.id = sectionId;
                
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = `#${sectionId}`;
                a.textContent = `${videoNum} - ${title}`;
                li.appendChild(a);
                tocList.appendChild(li);
            }
        });
    }
    
    // Smooth scroll for TOC links
    document.querySelectorAll('.toc a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Expand all / Collapse all functionality (optional)
    function createExpandCollapseButtons() {
        const toc = document.querySelector('.toc');
        if (!toc) return;
        
        const buttonContainer = document.createElement('div');
        buttonContainer.style.cssText = 'margin-top: 15px; display: flex; gap: 10px;';
        
        const expandAll = document.createElement('button');
        expandAll.textContent = 'Expand All';
        expandAll.style.cssText = 'padding: 8px 16px; background: #3b82f6; color: white; border: none; border-radius: 4px; cursor: pointer;';
        expandAll.addEventListener('click', () => {
            document.querySelectorAll('.topic-header').forEach(header => {
                header.classList.add('active');
                header.nextElementSibling.classList.add('active');
            });
        });
        
        const collapseAll = document.createElement('button');
        collapseAll.textContent = 'Collapse All';
        collapseAll.style.cssText = 'padding: 8px 16px; background: #64748b; color: white; border: none; border-radius: 4px; cursor: pointer;';
        collapseAll.addEventListener('click', () => {
            document.querySelectorAll('.topic-header').forEach(header => {
                header.classList.remove('active');
                header.nextElementSibling.classList.remove('active');
            });
        });
        
        buttonContainer.appendChild(expandAll);
        buttonContainer.appendChild(collapseAll);
        toc.appendChild(buttonContainer);
    }
    
    // Initialize
    generateTOC();
    createExpandCollapseButtons();
    
    // Print functionality
    window.printNotes = function() {
        // Expand all for printing
        document.querySelectorAll('.topic-content').forEach(content => {
            content.classList.add('active');
        });
        window.print();
    };
    
    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + P for print
        if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
            e.preventDefault();
            window.printNotes();
        }
        
        // Escape to collapse all
        if (e.key === 'Escape') {
            document.querySelectorAll('.topic-header').forEach(header => {
                header.classList.remove('active');
                header.nextElementSibling.classList.remove('active');
            });
        }
    });
});

