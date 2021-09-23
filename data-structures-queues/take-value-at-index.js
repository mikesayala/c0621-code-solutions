/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  let front = queue.dequeue();
  let counter = index;
  if (typeof front === 'undefined') {
    return;
  }
  while (counter > 0) {
    queue.enqueue(front);
    front = queue.dequeue();
    counter--;
  }
  return front;
}
