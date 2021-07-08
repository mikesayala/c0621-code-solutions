var $span = document.querySelectorAll('.span');
var index = 0;
document.addEventListener('keydown', handleKeyDown);
function handleKeyDown(event) {
  if (index < $span.length) {
    if (event.key === $span[index].textContent) {
      $span[index].className = 'correct';
      if (index < $span.length - 1) {
        $span[index + 1].className = 'bottom';
      }
      index++;
    } else {
      $span[index].className = 'incorrect';
    }
  }
}
