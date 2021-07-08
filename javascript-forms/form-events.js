function handleFocus(event) {
  event.preventDefault();
  console.log('focus event fired');
  console.log(event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log(event.target.name);
}

function handleInput(event) {
  console.log(event.target.name, event.target.value);
}

var $focus = document.querySelector('#user-name');
var $blur = document.querySelector('#user-email');
var $input = document.querySelector('textarea');

$focus.addEventListener('focus', handleFocus);
$focus.addEventListener('blur', handleBlur);
$focus.addEventListener('input', handleInput);

$blur.addEventListener('focus', handleFocus);
$blur.addEventListener('blur', handleBlur);
$blur.addEventListener('input', handleInput);

$input.addEventListener('focus', handleFocus);
$input.addEventListener('blur', handleBlur);
$input.addEventListener('input', handleInput);
