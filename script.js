// Get elements
const openModalBtn = document.getElementById('open-modal');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('close-modal');

// Function to open modal
function openModal() {
  modal.style.display = 'flex';
  modal.setAttribute('aria-hidden', 'false');
  closeModalBtn.focus(); // Focus on close button when modal is opened
}

// Function to close modal
function closeModal() {
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');
  openModalBtn.focus(); // Return focus to the button that opened the modal
}

// Open modal event
openModalBtn.addEventListener('click', openModal);

// Close modal event
closeModalBtn.addEventListener('click', closeModal);

// Close modal with ESC key
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.style.display === 'flex') {
    closeModal();
  }
});

// Trap focus inside the modal when open
document.addEventListener('keydown', (e) => {
  const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
  const modalFocusableElements = modal.querySelectorAll(focusableElements);
  const firstFocusableElement = modalFocusableElements[0];  
  const lastFocusableElement = modalFocusableElements[modalFocusableElements.length - 1]; 

  if (e.key === 'Tab' && modal.style.display === 'flex') {
    if (e.shiftKey) { // If Shift + Tab is pressed
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus();
        e.preventDefault();
      }
    } else { // If Tab is pressed
      if (document.activeElement === lastFocusableElement) {
        firstFocusableElement.focus();
        e.preventDefault();
      }
    }
  }
});
