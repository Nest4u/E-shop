tailwind.config = {
    theme: {
      extend: {
        colors: {
          bandage: '#23856D',
          link: '#737373',
          blueLink: '#23A6F0',
          bgbuton: '#F9F9F9',
          cardscolor:'#E77C40',
          tx:'#252B42'
          
        }
      }
    }
  }
 


  function toggleMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileCloseButton = document.getElementById('mobile-close-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    
    mobileMenuButton.classList.toggle('hidden');
    mobileCloseButton.classList.toggle('hidden');

    
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
    } else {
        mobileMenu.classList.add('hidden');
    }
}
 
  