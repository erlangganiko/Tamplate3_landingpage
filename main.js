document.addEventListener("DOMContentLoaded", function () {
  const getBtn = document.getElementById('getTicketsBtn');
  const popup = document.getElementById('popupBox');
  const links = document.getElementById('popupLinks');

  const whatsapp = atob('MDgxMjIwODY5NjAz'); //nomer wa 

  getBtn.addEventListener('click', (e) => {
    e.preventDefault();
    links.innerHTML = `
  <a href="https://wa.me/${whatsapp}" target="_blank" class="icon-link wa">WhatsApp</a>
  <a href="mailto:info@example.com" class="icon-link email">Email</a>
  <a href="https://instagram.com/moemtaz" target="_blank" class="icon-link ig">Instagram</a>
  <a href="https://tiktok.com/@moemtaz" target="_blank" class="icon-link tiktok">TikTok</a>
`;

    popup.classList.remove('hidden');
  });

  window.togglePopup = function () {
    popup.classList.add('hidden');
  }
});
