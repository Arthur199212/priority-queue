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
    let result = this.root;
    
    this.root = null;
    this.parentNodes.shift();

    this.sizeCount--;

    return result;
	}

	restoreRootFromLastInsertedNode(detached) {
		this.root = h.parentNodes.pop();

    this.root.left = detached.parent;
    this.root.left.parent = this.root;
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
	if (node.parent == null) {
		this.root = node;
	} else if (node.priority > node.parent.priority) {

		let parentInd = this.parentNodes.indexOf(node.parent);
		let nodeInd = this.parentNodes.indexOf(node);

		if (nodeInd !== -1) {
			if (parentInd === -1) {
				this.parentNodes[nodeInd] = node.parent;
			} else {
				this.parentNodes[nodeInd] = node.parent;
				this.parentNodes[parentInd] = node;
			}
		}
		
		node.swapWithParent();

		this.shiftNodeUp(node)
	}
}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
