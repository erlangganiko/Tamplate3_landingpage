
document.addEventListener("DOMContentLoaded", function () {
  const getBtn = document.getElementById('getTicketsBtn');
  const popup = document.getElementById('popupBox');
  const linksContainer = document.getElementById('popupLinks'); 

  const whatsapp = atob('MDgxMjIwODY5NjAz'); //nomer wa
  
  let iconLinks = [];
 
  function populateIconLinks() {
    linksContainer.innerHTML = `
      <a href="https://wa.me/${whatsapp}" target="_blank" class="icon-link wa">WhatsApp</a>
      <a href="mailto:info@example.com" class="icon-link email">Email</a>
      <a href="https://instagram.com/moemtaz" target="_blank" class="icon-link ig">Instagram</a>
      <a href="https://tiktok.com/@moemtaz" target="_blank" class="icon-link tiktok">TikTok</a>
    `;
    iconLinks = Array.from(linksContainer.querySelectorAll('.icon-link'));
  }

  populateIconLinks();

  getBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (popup.classList.contains('hidden')) {
    
      popup.classList.remove('hidden'); 
      showIconsSequentially(iconLinks);
    } else {
      
      hideIconsSequentially(iconLinks, () => {
        popup.classList.add('hidden'); 
      });
    }
  });

  window.togglePopup = function () {
   
    hideIconsSequentially(iconLinks, () => {
      popup.classList.add('hidden');
    });
  }

  function showIconsSequentially(icons) {
    icons.forEach((icon, index) => {
      
      icon.classList.remove('hidden-transition');
      setTimeout(() => {
        icon.classList.add('visible'); 
      }, index * 500); // Delay 100ms untuk setiap ikon berikutnya
    });
  }

  function hideIconsSequentially(icons, callback) {
    
    const reversedIcons = Array.from(icons).reverse(); 

    let iconsHiddenCount = 0;

    reversedIcons.forEach((icon, index) => {
      setTimeout(() => {
        icon.classList.remove('visible'); 
        icon.classList.add('hidden-transition'); 

        iconsHiddenCount++;
        if (iconsHiddenCount === icons.length && typeof callback === 'function') {
        
          setTimeout(callback, 500); // Sesuaikan delay ini dengan durasi transisi CSS
        }
      }, index * 0); // Delay 100ms untuk setiap ikon berikutnya
    });
  }

});
