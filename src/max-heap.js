const Node = require('./node');

class MaxHeap {
	constructor() {

	  this.root = null;
	  this.parentNodes = [];
	}

	push(data, priority) {
		let node = new Node(data, priority);

		this.insertNode(node);
		this.shiftNodeUp(node);
	}

	pop() {
		
	}

	detachRoot() {
		// this.root = null;
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		
	}

	isEmpty() {
		if (this.root == null) {
			return true;
		} else {
			return false;
		}
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
	}

	insertNode(node) {
		if ( this.isEmpty() ) {
			this.root = node;
			this.parentNodes[0] = node;
		} else {

			if (this.root.left == null) {
				this.root.left == node;
				this.parentNodes[1] = node;
			} else if (this.root.right == null) {
				this.root.right == node;
				this.parentNodes[2] = node;
			} else if (this.root.left.left == null) {
				this.root.left.left == node;
				this.parentNodes[3] = node;
			} else {
				this.root.left.right == node;
				this.parentNodes[4] = node;
			}
		}

	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
