class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;

		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if ( this.left == null ) {
      this.left = node;
      node.parent = this;
		} else if ( this.right == null) {
      this.right = node;
      node.parent = this;
		}
	}

	removeChild(node) {
    if (node.parent == null) {
      throw new Error('Passed node is not a child of this node');
    } else if (node.parent.left == node) {
      node.parent.left = null;
    } else if (node.parent.right == node) {
      node.parent.right = null;
    }

    node.parent = null;
	}

	remove() {
    if (this.parent != null) {
      this.parent.removeChild(this);
    }
	}

	swapWithParent() {
    if (this.parent != null) {

      if (this.parent.right == this) {
        this.parent.left.parent = this;

      } else if (this.parent.left == this) {

        let childOfLeft = this.left;
        let path;

        if (this.parent.parent != null) {
          if (this.parent.parent.left == this.parent) {
            path = 'left';
          } else if (this.parent.parent.right == this.parent) {
            path = 'right';
          }
        }

        this.right = this.parent.right;
        this.left = this.parent;
        this.left.left = childOfLeft;
        this.parent = this.parent.parent;

        if (this.parent != null) {
          if (path == 'left') {
            this.parent.left = this;
          } else {
            this.parent.right = this;
          }  
        }        

        this.left.parent = this;

        if (this.right != null) {
          this.right.parent = this;
        }
      }
    }
  }
}

module.exports = Node;
