
    // Add timestamp on load
    document.getElementById('timestamp').value = new Date().toISOString();

    // Modal logic
    const modals = document.querySelectorAll('.modal');
    const links = document.querySelectorAll('.card a');

    links.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const modalId = link.getAttribute('href').substring(1);
        document.getElementById(modalId).style.display = 'block';
      });
    });

    function closeModal(id) {
      document.getElementById(id).style.display = 'none';
    }