// const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */
const ListNode = require('../extensions/list-node');

class Queue {
  constructor() {
    this.head = null;
    this.last = null;
  }

  get size() {
    let count = 0;
    let first = this.head;
    for (; first !== null; count++) {
      first = first.next;
    }
    return count;
  }

  enqueue(element) {
    if (this.last === null) {
      this.last = new ListNode(element);
      this.head = this.last;
    } else {
      this.last.next = new ListNode(element);
      this.last = this.last.next;
    }
  }

  dequeue() {
    if (this.head !== null) {
      const res = this.head.value;
      this.head = this.head.next;
      return res;
    }
    return undefined;
  }
}

module.exports = Queue;
