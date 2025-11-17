document.addEventListener('DOMContentLoaded', () => {
  // Set timestamp
  document.getElementById('timestamp').value = new Date().toISOString();

  // Open modals
  document.querySelectorAll('.membership-cards .card a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const modal = document.getElementById(link.parentElement.dataset.modal);
      if (modal) modal.showModal();
    });
  });

  // Close modals
  document.querySelectorAll('dialog .close').forEach(btn => {
    btn.addEventListener('click', () => btn.closest('dialog').close());
  });
});
