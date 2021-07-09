var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', handleClick);

function handleClick(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tab.length; i++) {
      if ($tab[i] === event.target) {
        $tab[i].classList.add('active');
      } else {
        $tab[i].classList.remove('active');
      }
    }
    var $dataView = event.target.getAttribute('data-view');
    for (i = 0; i < $view.length; i++) {
      if ($view[i].getAttribute('data-view') === $dataView) {
        $view[i].className = 'view';
      } else {
        $view[i].className = 'view hidden';
      }
    }
  }
}
