const btnJoinTelegram = document.querySelector('.btn-telegram');
const btnSaleDetail = document.querySelector('.btn-saledetail');
const saleURL =
  'https://dxsale.app/app/v3/defipresale?saleID=1258&chain=BSC#DxWarning-modal';
const telegramURL = 'https://t.me/MetaCorgiOficial';
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
btnClick(btnSaleDetail, saleURL);
