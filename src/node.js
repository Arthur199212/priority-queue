class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;

		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		// this.parent.left = leftChild;
		// this.parent.right = null;
	}

	removeChild(node) {

	}

	remove() {
		// child.parent.removeChild(child);
	}

	swapWithParent() {
		
	}
}

module.exports = Node;
