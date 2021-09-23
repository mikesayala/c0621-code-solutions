/* exported postpone */

function postpone(queue) {
  const front = queue.dequeue();
  if (typeof front === 'undefined') {
    return;
  }
  queue.enqueue(front);
}
