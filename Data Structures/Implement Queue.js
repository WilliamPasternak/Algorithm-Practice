
// -- Implement a Queue -- //

/*
What is a Queue?
- A stack is a FIFO data structure.
How are items added and removed from a stack?
- Items are added to the end, and removed from the front.
What methods do stacks utilize?
- constructor(), enqueue() & dequeue()
What properties exist on a stack?
- Storage, head, tail
*/


class Queue{
	constructor(){
		this.storage = {}
		this.head = 0
		this.tail = 0
	}

	enqueue(element){
		this.storage[this.tail] = element
		this.tail++
	}
	
	dequeue(){
		const removed = this.storage[this.head]
		delete this.storage[this.head]
		this.head++
		return removed
	}
}

