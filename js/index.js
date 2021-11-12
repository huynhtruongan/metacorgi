const btnJoinTelegram = document.querySelector('.btn-telegram');
const telegramURL = 'https://t.me/metacorgi';
function openURL(url) {
  window.open(url);
}
function btnClick(el, url) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    openURL(url);
  });
}
btnClick(btnJoinTelegram, telegramURL);

