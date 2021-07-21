var $leftArrow = document.querySelector('.fa-less-than');
var $rightArrow = document.querySelector('.fa-greater-than');
var $img = document.querySelectorAll('img');
var $circle = document.querySelectorAll('.margin-10');
var counter = 0;

function activate(image, circle) {
  image[counter].className = 'view';
  circle[counter].className = 'fas fa-circle margin-10';
}

function deactivate(image, button) {
  image[counter].className = 'hidden';
  button[counter].className = 'far fa-circle margin-10';
}

function handleLeftClick(event) {
  deactivate($img, $circle);
  if (counter === 0) {
    counter = $img.length - 1;
  } else {
    counter = counter - 1;
  }
  activate($img, $circle);
}

function handleRightClick(event) {
  deactivate($img, $circle);
  counter = (counter + 1) % $img.length;
  activate($img, $circle);
}

function circleClick(event) {
  deactivate($img, $circle);
  var index = event.target.getAttribute('data-index');
  if (index !== null) {
    counter = index - 1;
  }
  activate($img, $circle);
}

setInterval(handleRightClick, 3000);
window.addEventListener('click', circleClick);
$leftArrow.addEventListener('click', handleLeftClick);
$rightArrow.addEventListener('click', handleRightClick);
