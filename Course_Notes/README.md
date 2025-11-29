# Course Notes Documentation

This folder contains comprehensive HTML notes for all courses that can be viewed in a browser or converted to PDF.

## Structure

- `notes-styles.css` - Shared CSS styles for all notes
- `notes-script.js` - Shared JavaScript for interactivity
- `Full_Stack_Web_Dev_Notes.html` - Complete notes for Full-Stack Web Development (Sample: Video 01 complete)
- `template.html` - Template structure for creating new notes

## Features

### Interactive Elements
- **Dropdown Topics**: Click on any topic header to expand/collapse content
- **Table of Contents**: Auto-generated navigation for all videos
- **Expand/Collapse All**: Buttons to expand or collapse all topics at once
- **Smooth Scrolling**: Click TOC links for smooth navigation

### Content Structure
Each video section includes:
- Video number and title
- Multiple topic dropdowns
- Detailed explanations
- Code examples with syntax highlighting
- Example boxes with practical demonstrations
- Tips, warnings, and info boxes
- Tables for structured information

### Print/PDF Ready
- Optimized for printing
- All dropdowns expand automatically when printing
- Page breaks handled properly
- Clean, professional layout

## Creating Notes for Remaining Videos

### Pattern to Follow

For each video, create a section like this:

```html
<div class="video-section" id="video-02">
    <div class="video-header">
        <span class="video-number">Video 02</span>
        <h2 class="video-title">Video Title Here</h2>
    </div>
    
    <!-- For each topic -->
    <div class="topic-dropdown">
        <div class="topic-header">
            <span>Topic Name</span>
            <span class="topic-icon">▼</span>
        </div>
        <div class="topic-content">
            <div class="topic-body">
                <h3>Topic Name</h3>
                <p>Detailed explanation...</p>
                
                <!-- Code examples -->
                <div class="code-block">
<code>// Your code here</code>
                </div>
                
                <!-- Examples -->
                <div class="example-box">
                    <h4>Example Title</h4>
                    <p>Example description...</p>
                </div>
                
                <!-- Tips/Warnings -->
                <div class="note-tip">
                    <h4>💡 Tip</h4>
                    <p>Helpful tip here...</p>
                </div>
            </div>
        </div>
    </div>
</div>
```

### Content Guidelines

1. **Be Comprehensive**: Cover all aspects of each topic
2. **Include Examples**: Provide practical code examples
3. **Add Context**: Explain why, not just how
4. **Use Visual Aids**: Tables, code blocks, example boxes
5. **Reference Resources**: Link to official docs when relevant
6. **Keep Updated**: Update notes as technologies evolve

### Special Boxes

- **Example Box** (`.example-box`): For practical examples
- **Tip Box** (`.note-tip`): For helpful tips and best practices
- **Warning Box** (`.note-warning`): For common mistakes or important warnings
- **Info Box** (`.note-info`): For additional information

## Converting to PDF

### Browser Method
1. Open the HTML file in a browser
2. Press `Ctrl+P` (or `Cmd+P` on Mac)
3. Select "Save as PDF" as the destination
4. Adjust settings:
   - Margins: Default or Custom
   - Scale: 100%
   - Options: Background graphics (check this)
5. Click Save

### Online Tools
- Use online HTML to PDF converters
- Upload the HTML file and download PDF

### Command Line (if Node.js available)
```bash
npm install -g html-pdf
html-pdf Full_Stack_Web_Dev_Notes.html output.pdf
```

## Courses to Complete

- [x] Full-Stack Web Development (Video 01 complete, 21 remaining)
- [ ] AI & Machine Learning (20 videos)
- [ ] Cybersecurity (18 videos)
- [ ] Game Development (20 videos)
- [ ] Android App Development (18 videos)

## Notes

- All notes use the same CSS and JavaScript files
- Each course should have its own HTML file
- Keep the structure consistent across all courses
- Test print/PDF conversion before finalizing

## Support

For questions or issues with the notes structure, refer to the template.html file or the complete example in Full_Stack_Web_Dev_Notes.html.

