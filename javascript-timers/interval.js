var h1 = document.querySelector('h1');
var counter = 4;
var count = setInterval(function () {
  if (counter > 1) {
    counter--;
    h1.textContent = counter;
  } else {
    h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(count);
  }
}, 800);
