const Node = require('./node');
class MaxHeap {
	constructor() {

	  this.root = null;
		this.parentNodes = [];
		
		this.sizeCount = 0;
	}

	push(data, priority) {
		let node = new Node(data, priority);

		this.insertNode(node);
		this.shiftNodeUp(node);

		this.sizeCount++;
	}

	pop() {
		// this.detachRoot(); 
		// this.restoreRootFromLastInsertedNode(detached);
		// shiftNodeUp(node);

		this.sizeCount--;
	}

	detachRoot() {
		// this.root = null;
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		return this.sizeCount;
	}

	isEmpty() {
		if ( this.sizeCount < 1 ) {
			return true;
		} else {
			return false;
		}
	}

	clear() {
		this.root = null;
		this.parentNodes = [];

		this.sizeCount = 0;
	}

	insertNode(node, i) {
		if (this.root == null) {
      this.root = node;
		} else {
      this.parentNodes[0].appendChild(node);
      if (this.parentNodes[0].right != null) {
        this.parentNodes.shift();
      }
    }
    this.parentNodes.push(node);
	}

	shiftNodeUp(node) {
    let newRoot = node;

    let count = 0;

    while (node.parent != null && node.priority > node.parent.priority && count < 4) {
      // node = node.parent;
      // node.parent = newRoot;

      node.swapWithParent();
     
      count++;
		}
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
