
// -- Implement a stack -- //

/*
What is a stack?
- A stack is a LIFO data structure.
How are items added and removed from a stack?
- Items are added and removed from the top (like push & pop)
What methods do stacks utilize?
- push() to add an element, pop() to remove an element, peek() to look at the top element
What properties exist on a stack?
- Storage, Size
*/


class Stack{
	constructor(){
		this.storage = {}
		this.size = 0
	}
	push(element){
		this.size++
		this.storage[this.size] = element
	}
	pop(){
		let removed = this.storage[this.size]
		delete this.storage[this.size]
		this.size--
		return removed
	}
	peek(){
		return this.storage[this.size]
	}
}