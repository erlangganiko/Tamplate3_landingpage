document.addEventListener("DOMContentLoaded", function () {
  const getBtn = document.getElementById('getTicketsBtn');
  const popup = document.getElementById('popupBox');
  const links = document.getElementById('popupLinks');

  const whatsapp = atob('MDgxMjIwODY5NjAz'); //nomer wa 

  getBtn.addEventListener('click', (e) => {
    e.preventDefault();
    links.innerHTML = `
      <a href="https://wa.me/${whatsapp}" target="_blank">📱 WhatsApp</a>
      <a href="mailto:info@example.com">✉️ Email</a>
      <a href="https://instagram.com/moemtaz" target="_blank">📸 IG</a>
      <a href="https://tiktok.com/@moemtaz" target="_blank">🎵 TikTok</a>
    `;
    popup.classList.remove('hidden');
  });

  window.togglePopup = function () {
    popup.classList.add('hidden');
  }
});
