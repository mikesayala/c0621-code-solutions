var $openModal = document.querySelector('.button');
var $background = document.querySelector('.background');
var $modalButton = document.querySelector('.modal-button');
var $modalContainer = document.querySelector('.modal-container');

function openModal(event) {
  $background.classList.remove('hidden');
  $modalContainer.classList.remove('hidden');
}

function closeModal(event) {
  $background.classList.toggle('hidden');
  $modalContainer.classList.toggle('hidden');
}

$openModal.addEventListener('click', openModal);
$modalButton.addEventListener('click', closeModal);
