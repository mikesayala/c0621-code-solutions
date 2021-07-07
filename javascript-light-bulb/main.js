var $circleOn = document.querySelector('.circle');
var $nightMode = document.querySelector('.nightmode');
var $off = document.querySelector('.off');
var $on = document.querySelector('.on');

function handleClick(event) {
  if (event.target) {
    $on.classList.toggle('hidden');
    $off.classList.remove('hidden');
  }
}

$circleOn.addEventListener('click', handleClick);
$nightMode.addEventListener('click', handleClick);
