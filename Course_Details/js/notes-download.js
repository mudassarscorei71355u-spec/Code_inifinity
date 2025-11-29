// PDF Download functionality for course notes
// Uses html2pdf.js library for converting HTML to PDF

// Pass theme to notes page
function passThemeToNotes() {
    // Get current theme from the website
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'neon-nexus';
    
    // Store theme in sessionStorage so notes page can access it
    sessionStorage.setItem('websiteTheme', currentTheme);
    
    // Also store referrer URL for back button
    sessionStorage.setItem('notesReferrer', window.location.href);
}

// Load html2pdf.js library dynamically
function loadHtml2Pdf() {
    return new Promise((resolve, reject) => {
        // Check if already loaded
        if (window.html2pdf) {
            resolve();
            return;
        }

        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
        script.integrity = 'sha512-GsLlZN/3F2ErC5ifS5QtgpiJtWd43JWSuIgh7mbzZ8zBps+dvLusV+eNQATqgA/HdeKFVidA0ffA9fe0YMk+4A==';
        script.crossOrigin = 'anonymous';
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Failed to load html2pdf.js'));
        document.head.appendChild(script);
    });
}

// Download notes as PDF
async function downloadNotesPDF(notesFileName, pdfFileName) {
    try {
        // Pass theme to notes page
        passThemeToNotes();
        
        // Show loading state
        const button = event.target.closest('.notes-download-btn');
        const originalText = button.innerHTML;
        button.disabled = true;
        button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating PDF...';

        // Store referrer and PDF download flag
        sessionStorage.setItem('notesReferrer', window.location.href);
        sessionStorage.setItem('pdfDownload', 'true');
        sessionStorage.setItem('pdfFileName', pdfFileName);

        // Open notes page in new window - it will auto-generate PDF
        const notesPath = `../Course_Notes/${notesFileName}`;
        const notesWindow = window.open(notesPath, '_blank');
        
        if (!notesWindow) {
            throw new Error('Popup blocked. Please allow popups for this site.');
        }

        // Restore button after a short delay
        setTimeout(() => {
            button.disabled = false;
            button.innerHTML = originalText;
        }, 1000);

        // Show info message
        showNotification('Opening notes page. PDF will download automatically...', 'info');

    } catch (error) {
        console.error('Error opening notes page:', error);
        
        // Restore button
        const button = event.target.closest('.notes-download-btn');
        if (button) {
            button.disabled = false;
            button.innerHTML = '<i class="fas fa-download"></i> Download PDF Notes';
        }

        // Show error message
        showNotification('Failed to open notes page. Please try again.', 'error');
    }
}

// Show notification
function showNotification(message, type = 'info') {
    // Remove existing notification if any
    const existing = document.querySelector('.pdf-notification');
    if (existing) {
        existing.remove();
    }

    // Determine icon and color based on type
    let icon, bgColor;
    switch(type) {
        case 'success':
            icon = 'fa-check-circle';
            bgColor = '#10b981';
            break;
        case 'error':
            icon = 'fa-exclamation-circle';
            bgColor = '#ef4444';
            break;
        case 'info':
            icon = 'fa-info-circle';
            bgColor = '#3b82f6';
            break;
        default:
            icon = 'fa-info-circle';
            bgColor = '#3b82f6';
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `pdf-notification pdf-notification-${type}`;
    notification.innerHTML = `
        <i class="fas ${icon}"></i>
        <span>${message}</span>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${bgColor};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        font-weight: 500;
        animation: slideIn 0.3s ease-out;
        max-width: 400px;
    `;

    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    if (!document.querySelector('#pdf-notification-styles')) {
        style.id = 'pdf-notification-styles';
        document.head.appendChild(style);
    }

    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideIn 0.3s ease-out reverse';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

