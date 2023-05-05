const navLinks = document.querySelectorAll('.navLinks');


navLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const pageId = event.target.dataset.target;
      showPage(pageId);
    });
  });
  
  showPage('first');
  