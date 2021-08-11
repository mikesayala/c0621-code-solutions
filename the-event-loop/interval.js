let count = 3;

const countdown = setInterval(function () {
  if (count > 0) {
    console.log(count);
    count--;
  } else {
    console.log('blast off!');
    clearInterval(countdown);
  }
}, 1000);
