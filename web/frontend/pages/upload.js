// scripts.js
document.addEventListener("DOMContentLoaded", function () {
    const previewSection = document.getElementById('previewSection');
    
    // Show preview section after data upload
    const uploadForm = document.getElementById('uploadForm');
    uploadForm.addEventListener('submit', function (e) {
      e.preventDefault();
      
      // Simulate data processing
      setTimeout(() => {
        previewSection.style.display = "block";
      }, 1000);  // Mock delay for demo purposes
    });
  });
  