var $openModal = document.querySelector('.button');
var $background = document.querySelector('.background');
var $modalButton = document.querySelector('.modal-button');
var $modalContainer = document.querySelector('.modal-container');

function openModal(event) {
  if (event.target) {
    $background.classList.remove('hidden');
    $modalContainer.classList.remove('hidden');
  }
}

function closeModal(event) {
  if (event.target.matches('.modal-button')) {
    $background.classList.toggle('hidden');
    $modalContainer.classList.toggle('hidden');
  }
}

$openModal.addEventListener('click', openModal);
$modalButton.addEventListener('click', closeModal);
