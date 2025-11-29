// Theme synchronization and navigation for notes pages

// Apply theme from website
function applyTheme() {
    // Get theme from sessionStorage (from website) or localStorage (persisted)
    const websiteTheme = sessionStorage.getItem('websiteTheme');
    const savedTheme = localStorage.getItem('notesTheme');
    const theme = websiteTheme || savedTheme || 'neon-nexus';
    
    // Apply theme to notes page
    document.documentElement.setAttribute('data-theme', theme);
    
    // Store in localStorage for persistence
    localStorage.setItem('notesTheme', theme);
}

// Load theme on page load
document.addEventListener('DOMContentLoaded', function() {
    applyTheme();
    
    // Setup back button
    setupBackButton();
    
    // Check if PDF download is requested
    const pdfDownload = sessionStorage.getItem('pdfDownload');
    if (pdfDownload === 'true') {
        sessionStorage.removeItem('pdfDownload');
        const pdfFileName = sessionStorage.getItem('pdfFileName') || 'Course_Notes.pdf';
        sessionStorage.removeItem('pdfFileName');
        
        // Wait for page to fully load, then generate PDF
        window.addEventListener('load', function() {
            setTimeout(() => {
                generatePDF(pdfFileName);
            }, 2000);
        });
    }
});

// Setup back button functionality
function setupBackButton() {
    const backButton = document.getElementById('back-to-website');
    if (backButton) {
        backButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get referrer URL from sessionStorage
            const referrer = sessionStorage.getItem('notesReferrer');
            if (referrer) {
                // Try to go back to the referrer
                window.location.href = referrer;
            } else if (document.referrer && document.referrer.includes('Course_Details')) {
                // Use browser referrer if available
                window.location.href = document.referrer;
            } else {
                // Fallback to index page
                window.location.href = '../index.html';
            }
        });
    }
}

// Generate PDF using browser's native print functionality
async function generatePDF(pdfFileName) {
    try {
        // Wait a bit more for all resources to load
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Expand all dropdowns for printing
        const allTopicHeaders = document.querySelectorAll('.topic-header');
        allTopicHeaders.forEach(header => {
            const topicBody = header.nextElementSibling;
            if (topicBody && topicBody.classList.contains('topic-body')) {
                topicBody.style.display = 'block';
                header.classList.add('active');
            }
        });

        // Hide back button for PDF
        const backButton = document.getElementById('back-to-website');
        if (backButton) {
            backButton.style.display = 'none';
        }

        // Get current theme
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'neon-nexus';
        
        // Create print styles based on theme
        const printStyle = document.createElement('style');
        let printStyles = `
            @media print {
                @page {
                    margin: 1cm;
                    size: A4;
                }
                .back-button-container {
                    display: none !important;
                }
                .topic-body {
                    display: block !important;
                }
                .topic-header {
                    page-break-after: avoid;
                }
                .video-section {
                    page-break-before: auto;
                    page-break-after: auto;
                }
                .code-block {
                    page-break-inside: avoid;
                }
        `;
        
        // Theme-specific print styles
        if (currentTheme === 'white') {
            printStyles += `
                body {
                    background: white !important;
                    color: #1e293b !important;
                }
                .container {
                    background: white !important;
                    color: #1e293b !important;
                }
                .code-block {
                    background: #f8fafc !important;
                    color: #1e293b !important;
                    border: 1px solid #e2e8f0 !important;
                }
            `;
        } else if (currentTheme === 'dark') {
            printStyles += `
                body {
                    background: #ffffff !important;
                    color: #1e293b !important;
                }
                .container {
                    background: #ffffff !important;
                    color: #1e293b !important;
                }
                .code-block {
                    background: #f8fafc !important;
                    color: #1e293b !important;
                    border: 1px solid #e2e8f0 !important;
                }
                h1, h2, h3, h4 {
                    color: #1e293b !important;
                }
            `;
        } else {
            // neon-nexus - convert to print-friendly
            printStyles += `
                body {
                    background: #ffffff !important;
                    color: #1e293b !important;
                }
                .container {
                    background: #ffffff !important;
                    color: #1e293b !important;
                }
                .code-block {
                    background: #f8fafc !important;
                    color: #1e293b !important;
                    border: 1px solid #e2e8f0 !important;
                }
                h1, h2, h3, h4 {
                    color: #1e293b !important;
                }
                .video-header {
                    background: linear-gradient(135deg, #3b82f6, #8b5cf6) !important;
                    color: white !important;
                }
            `;
        }
        
        printStyles += `}`;
        printStyle.textContent = printStyles;
        document.head.appendChild(printStyle);

        // Use browser's print dialog
        window.print();
        
        // Show message
        setTimeout(() => {
            alert('Please use "Save as PDF" or "Print to PDF" in the print dialog to save the PDF.');
            
            // Restore back button
            if (backButton) {
                backButton.style.display = 'block';
            }
        }, 500);

    } catch (error) {
        console.error('Error generating PDF:', error);
        alert('Failed to generate PDF. Please use your browser\'s print function (Ctrl+P / Cmd+P) and save as PDF.');
    }
}

// No longer needed - using browser's native print functionality

