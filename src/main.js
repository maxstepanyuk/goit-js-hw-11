import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const form = event.target;
  const searchText = form.elements['search-text'].value.trim();

  if (searchText.length <= 0) {
    showToast('empty search', 'error');
    return;
  }
  showToast(searchText, 'info');
});

export function showToast(message, type = 'success') {
  const options = {
    message,
    position: 'bottomRight',
    timeoot: 5000,
  };
  switch (type) {
    case 'success':
      iziToast.success(options);
      break;
    case 'error':
      iziToast.error(options);
      break;
    case 'warning':
      iziToast.warning(options);
      break;
    case 'info':
      iziToast.info(options);
      break;

    default:
      iziToast.error({ ...options, message: 'invalid type of tosat' });
      break;
  }
}
