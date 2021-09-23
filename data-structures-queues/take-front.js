/* exported takeFront */

function takeFront(queue) {
  const front = queue.dequeue();
  if (typeof front === 'undefined') {
    return;
  }
  return front;
}
