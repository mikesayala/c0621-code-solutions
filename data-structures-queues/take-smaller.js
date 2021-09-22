/* exported takeSmaller */

function takeSmaller(queue) {
  const front = queue.dequeue();
  const second = queue.dequeue();
  if (typeof second === 'undefined') {
    return front;
  } else if (front < second) {
    queue.enqueue(second);
    return front;
  } else if (front === second) {
    queue.enqueue(second);
    return front;
  } else if (front > second) {
    queue.enqueue(front);
    return second;
  } else {
    return undefined;
  }
}
