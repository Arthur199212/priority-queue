const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		let maxSize = 30;
	}

	push(data, priority) {
		// this.push();
	}

	shift() {
		this.pop();
	}

	size() {

	}

	isEmpty() {
		if (this.root == 0) {
			return true;
		} else {return false}
	}
}

module.exports = PriorityQueue;
