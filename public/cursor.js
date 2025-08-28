// 8-Bit Custom Cursor Controller
class CustomCursor {
  constructor() {
    this.cursor = document.getElementById('custom-cursor');
    this.cursorDot = this.cursor.querySelector('.cursor-dot');
    this.isVisible = false;
    this.isHovering = false;
    this.isClicking = false;
    
    this.init();
  }

  init() {
    // Show cursor after a short delay
    setTimeout(() => {
      this.show();
    }, 100);

    // Mouse move event
    document.addEventListener('mousemove', (e) => {
      this.move(e.clientX, e.clientY);
    });

    // Mouse enter/leave events for hover effects
    document.addEventListener('mouseenter', () => {
      this.show();
    });

    document.addEventListener('mouseleave', () => {
      this.hide();
    });

    // Click events
    document.addEventListener('mousedown', () => {
      this.click();
    });

    document.addEventListener('mouseup', () => {
      this.release();
    });

    // Add hover effects to interactive elements
    this.addHoverEffects();
  }

  move(x, y) {
    if (!this.isVisible) return;
    
    // Smooth cursor movement - position arrow tip at mouse position
    this.cursor.style.transform = `translate(${x}px, ${y}px)`;
  }



  show() {
    this.isVisible = true;
    this.cursor.style.opacity = '1';
  }

  hide() {
    this.isVisible = false;
    this.cursor.style.opacity = '0';
  }

  hover() {
    if (this.isHovering) return;
    this.isHovering = true;
    this.cursor.classList.add('hover');
  }

  unhover() {
    if (!this.isHovering) return;
    this.isHovering = false;
    this.cursor.classList.remove('hover');
  }

  click() {
    this.isClicking = true;
    this.cursor.classList.add('clicking');
  }

  release() {
    this.isClicking = false;
    this.cursor.classList.remove('clicking');
  }

  addHoverEffects() {
    // Add hover effects to buttons, links, and interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, .interactive-hover, .elegant-button, .elegant-button-outline, .touch-button');
    
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        this.hover();
      });
      
      element.addEventListener('mouseleave', () => {
        this.unhover();
      });
    });
  }
}

// Initialize custom cursor when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Only initialize on desktop devices
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    new CustomCursor();
  }
});

// Alternative initialization for when the script loads after DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      new CustomCursor();
    }
  });
} else {
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    new CustomCursor();
  }
}
