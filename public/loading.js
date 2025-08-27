// 8-Bit Loading Screen Controller
class LoadingScreen {
  constructor() {
    this.loadingScreen = document.getElementById('loading-screen');
    this.progressFill = document.querySelector('.pixel-progress-fill');
    this.loadingStatus = document.querySelector('.loading-status');
    this.progress = 0;
    this.statusMessages = [
      'INITIALIZING SYSTEM...',
      'LOADING ASSETS...',
      'CONFIGURING DISPLAY...',
      'SETTING UP COMPONENTS...',
      'OPTIMIZING PERFORMANCE...',
      'READY TO LAUNCH...'
    ];
    this.currentStatusIndex = 0;
  }

  init() {
    this.startProgress();
    this.updateStatus();
  }

  startProgress() {
    const interval = setInterval(() => {
      this.progress += Math.random() * 15 + 5; // Random progress between 5-20%
      
      if (this.progress >= 100) {
        this.progress = 100;
        clearInterval(interval);
        setTimeout(() => {
          this.hide();
        }, 500);
      }
      
      this.progressFill.style.width = `${this.progress}%`;
    }, 200);
  }

  updateStatus() {
    const interval = setInterval(() => {
      if (this.progress >= 100) {
        clearInterval(interval);
        return;
      }
      
      this.currentStatusIndex = (this.currentStatusIndex + 1) % this.statusMessages.length;
      this.loadingStatus.textContent = this.statusMessages[this.currentStatusIndex];
    }, 800);
  }

  hide() {
    this.loadingScreen.classList.add('hidden');
    setTimeout(() => {
      this.loadingScreen.style.display = 'none';
    }, 500);
  }
}

// Initialize loading screen when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const loadingScreen = new LoadingScreen();
  loadingScreen.init();
});

// Alternative initialization for when the script loads after DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = new LoadingScreen();
    loadingScreen.init();
  });
} else {
  const loadingScreen = new LoadingScreen();
  loadingScreen.init();
}
