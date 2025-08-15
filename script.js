document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    toggleBtn.addEventListener('click', () => {
        mobileMenu.style.display = 
            mobileMenu.style.display === 'flex' ? 'none' : 'flex';

          menu.classList.toggle("show");
          menuToggle.classList.toggle("active");
    });

    mobileMenu.addEventListener('click', () => {
        mobileMenu.style.display = 
            mobileMenu.style.display === 'flex' ? 'none' : 'flex';
    });

});




