class LinkedList {
	constructor(){
		this.head = null
		this.tail = null
	}

	// Add to end of list / tail
	append(value){
		// if list is empty
		if (!this.tail){
			this.head = new Node(value)
			this.tail = this.head
		} else {
			let oldTail = this.tail  // Establish 'old tail'
			this.tail = new Node(value) // Add new Tail node
			oldTail.next = this.tail // Set next value of old tail, to current node
			this.tail.prev = oldTail // Set prev value of new tail to old tail.
      

		}
	}

	// Add to begining of list / head
	prepend(value){
		// if list is empty
		if (!this.head){
			this.head = new Node(value)
			this.tail = new Node(value)
		} else {
			let oldHead = this.head // Establish 'Old Head'
			this.head = new Node(value) // Add new Head node
			oldHead.prev = this.head  // Set Prev value of old Head, to current node
			this.head.next = oldHead // Set Next value of new Head to old head.
		}
	}

	deleteHead(){
		// If List is empty
		if (!this.head){
			return null
		// If there are elements in list
		} else { 
			// capture value of old head and return it
			let removedHead = this.head 
		// If there is only 1 node in the list
			if(this.head === this.tail){
				this.head = null
				this.tail = null
		// If there are more than 1 element
			} else {
				this.head = this.head.next
				this.head.prev = null
			}
			return removedHead.value
		}
	}
	deleteTail(){
		// If list is empty
		if(!this.tail){
			return null
		} 
		else {
			let removedTail = this.tail
			// If 1 Node Left
			if (this.head === this.tail){
				this.head = null
				this.tail = null
			} 
			// If there are more than 1 element
			else {
				this.tail = this.tail.prev
				this.tail.next = null
			}
		return removedTail.value
		}
	}
	search(value){
		let currentNode = this.head
		while (currentNode){
			if (currentNode.value === value){
				return currentNode
			}
			currentNode = currentNode.next
		}
		return null
	}
}


class Node {
	constructor(value,prev,next){
		this.value = value
		// null is set as default value if prev/next is not given
		this.prev = prev || null 
		this.next = next || null
	}
}

// Create Linked List
let list = new LinkedList()

