// Notes Generator Script
// This script helps generate comprehensive notes structure
// Run this in Node.js environment or adapt for browser

const fs = require('fs');
const path = require('path');

// Course data structure
const courses = {
    'Full_Stack_Web_Dev': {
        name: 'Full-Stack Web Development',
        videos: 22,
        // Video data will be extracted from HTML files
    },
    'AI_ML': {
        name: 'AI & Machine Learning',
        videos: 20,
    },
    'Cybersecurity': {
        name: 'Cybersecurity',
        videos: 18,
    },
    'Game_Dev': {
        name: 'Game Development',
        videos: 20,
    },
    'Android_Dev': {
        name: 'Android App Development',
        videos: 18,
    }
};

// Template for video section
function generateVideoSection(videoNumber, title, topics) {
    let html = `
        <div class="video-section" id="video-${videoNumber.toString().padStart(2, '0')}">
            <div class="video-header">
                <span class="video-number">Video ${videoNumber.toString().padStart(2, '0')}</span>
                <h2 class="video-title">${title}</h2>
            </div>
    `;
    
    topics.forEach((topic, index) => {
        html += `
            <div class="topic-dropdown">
                <div class="topic-header">
                    <span>${topic}</span>
                    <span class="topic-icon">▼</span>
                </div>
                <div class="topic-content">
                    <div class="topic-body">
                        <h3>${topic}</h3>
                        <p>Detailed explanation and examples for ${topic} will be added here.</p>
                        <div class="code-block">
<code>// Code examples will be added here
// Based on the topic content</code>
                        </div>
                        <div class="example-box">
                            <h4>Example</h4>
                            <p>Practical examples will be provided here.</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    
    html += `</div>`;
    return html;
}

// Generate full notes HTML
function generateNotesHTML(courseKey, courseData) {
    const header = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${courseData.name} - Complete Notes</title>
    <link rel="stylesheet" href="notes-styles.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>${courseData.name} - Complete Notes</h1>
            <p class="subtitle">${courseData.videos} Videos - Comprehensive Study Guide</p>
        </header>
        
        <div class="toc no-print">
            <h2>Table of Contents</h2>
            <ul id="toc-list"></ul>
        </div>
        
        <div id="content">
            <!-- Video sections will be inserted here -->
        </div>
    </div>
    
    <script src="notes-script.js"></script>
</body>
</html>`;
    
    return header;
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { generateVideoSection, generateNotesHTML, courses };
}

