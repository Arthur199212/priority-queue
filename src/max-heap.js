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

	pop() { // ! doesn't work correct

		if ( this.isEmpty() ) {
			return;
		}

		this.sizeCount--;
		let detachedNode = this.detachRoot();
		this.restoreRootFromLastInsertedNode(detachedNode);
		
		if ( !this.isEmpty() ) {
			shiftNodeUp(this.root);
		}
	

		return detached.data;
	}

	detachRoot() {
    let result = this.root;
    
		this.root = null;
		
		if (result.right == null) {
    	this.parentNodes.shift();
		}

    return result;
	}

	restoreRootFromLastInsertedNode(detached) { // ! not done
		
		

	}

	size() { // ! doesn't work
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

	insertNode(node) {
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
		if (!(node instanceof Node)) {
			throw 'Passed argument is not an instance of Node class.';
		}

		if (node.parent == null) {
			this.root = node;
		} else if (node.priority > node.parent.priority) {
			
			let parentInd = this.parentNodes.indexOf(node.parent);
			let nodeInd = this.parentNodes.indexOf(node);

			if (nodeInd != -1) {
				if (parentInd == -1) {
					this.parentNodes[nodeInd] = node.parent;
				} else {
					this.parentNodes[nodeInd] = node.parent;
					this.parentNodes[parentInd] = node;
				}
			}

			node.swapWithParent();
			this.shiftNodeUp(node);
		}
}

	shiftNodeDown(node) {
		let biggerNode = node;
		
		if (node.left && (biggerNode.priority < node.left.priority) ) {
			biggerNode = node.left;
		}

		if (node.right && (biggerNode.priority < node.right.priority) ) {
			biggerNode = node.right;
		}

		if (biggerNode == node) {
			return;
		}

		let indexOfBigger = -1;
		let indxOfNode = -1;


		if (biggerNode.right == null) {
			indexOfBigger = this.parentNodes.indexOf(biggerNode);
		}
		if (node.right == null) {
			indxOfNode = this.parentNodes.indexOf(node);
		}


		if (indxOfNode != -1 && indexOfBigger != -1) {
			this.parentNodes[indexOfBigger] = node;
			this.parentNodes[indxOfNode] = biggerNode;
		}
		else if (indexOfBigger != -1) {
			this.parentNodes[indexOfBigger] = node;
		}


		biggerNode.swapWithParent();

		if (this.root == node) {
			this.root = biggerNode;
		}

		this.shiftNodeDown(node);

	}
}

module.exports = MaxHeap;
