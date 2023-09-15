const LinkedList = () => {
	let head = null;

	const getHead = () => {
		return head;
	};

	const getTail = () => {
		if (head === null) {
			return head;
		}
		let tail = head;
		while (tail.nextNode !== null) {
			tail = tail.nextNode;
		}
		return tail;
	};

	const prepend = (value) => {
		let temp = null;
		if (head !== null) {
			temp = head;
			head = value;
			head.nextNode = temp;
		}
		head = Node(value);
		head.nextNode = temp;
	};

	const append = (value) => {
		if (head === null) {
			head = value;
		}
		let currentNode = head;
		while (currentNode.nextNode !== null) {
			currentNode = currentNode.nextNode;
		}
		currentNode.nextNode = Node(value);
	};

	const size = () => {
		let counter = 0;
		if (head !== null) {
			counter++;
		}
		let currentNode = head;
		while (currentNode.nextNode !== null) {
			counter++;
			currentNode = currentNode.nextNode;
		}
		return counter;
	};

	const at = (position) => {
		let currentNode = head;
		if (currentNode === null) {
			return currentNode;
		}
		let counter = position;
		while (counter > 0) {
			counter--;
			currentNode = currentNode.nextNode;
		}
		return currentNode;
	};

	const pop = () => {
		let currentNode = head;
		if (currentNode === null) {
			return null;
		}
		while (currentNode.nextNode !== null) {
			currentNode = currentNode.nextNode;
		}
		currentNode.nodeValue = null;
		const newLastNode = at(size() - 2);
		newLastNode.nextNode = null;
	};

	const contains = (value) => {
		let currentNode = head;
		if (currentNode === null) {
			return null;
		}
		while (currentNode.nodeValue !== value) {
			currentNode = currentNode.nextNode;
			if (currentNode.nodeValue === value) {
				return true;
			}
			if (currentNode.nextNode === null) {
				return false;
			}
		}
	};

	const find = (value) => {
		let currentNode = head;
		let counter = 0;
		if (currentNode === null) {
			return null;
		}
		while (currentNode.nodeValue !== value) {
			currentNode = currentNode.nextNode;
			counter++;
			if (currentNode.nodeValue === value) {
				return counter;
			}
		}
	};

	const toString = () => {
		if (head === null) {
			return "Nothing to console.";
		}
		let currentNode = head;
		let nodeMap = "";
		while (currentNode.nextNode !== null) {
			nodeMap = nodeMap.concat(`( ${currentNode.nodeValue} ) -> `);
			currentNode = currentNode.nextNode;
			if (currentNode.nextNode === null) {
				nodeMap = nodeMap.concat(`( ${currentNode.nodeValue} )`);
			}
		}
		return nodeMap;
	};

	const insertAt = (value, index) => {
		if (head === null) {
			return null;
		}
		let newNode = Node(value);
		let counter = index;
		let currentNode = head;
		while (counter > 0) {
			currentNode = currentNode.nextNode;
			counter--;
		}
		let temp = currentNode.nextNode;
		if (index <= 0) {
			newNode.nextNode = currentNode;
			head = newNode;
		} else {
			currentNode.nextNode = newNode;
			currentNode = currentNode.nextNode;
			currentNode.nextNode = temp;
		}
	};

	const removeAt = (index) => {
		if (head === null) {
			return null;
		}
		let currentNode = head;
		let counter = index - 1;
		while (counter > 0) {
			currentNode = currentNode.nextNode;
			counter--;
		}
		if (index <= 0) {
			head = currentNode.nextNode;
		}
		currentNode.nextNode = currentNode.nextNode.nextNode;
	};

	return {
		getHead,
		getTail,
		prepend,
		append,
		size,
		at,
		pop,
		contains,
		find,
		toString,
		insertAt,
		removeAt,
	};
};

const Node = (value) => {
	let nodeValue = value || null;
	let nextNode = null;
	return { nodeValue, nextNode };
};

const newList = LinkedList();
console.log(newList.getHead());
newList.prepend("node 1");
newList.prepend("node 2");
newList.prepend("node 3");
newList.prepend("node 4");
console.log(newList.size());
newList.append("node A");
newList.append("node B");
newList.append("node C");
console.log(newList.getHead());
console.log(newList.getTail());
console.log(newList.size());
console.log(newList.at(5));
console.log(newList.toString());
console.log(newList.contains("node C"));
newList.pop();
console.log(newList.contains("node C"));
console.log(newList.find("node 1"));
console.log("Original List: ", newList.toString());
newList.insertAt("node 5", 4);
console.log("Add 'node 5' @ 4: ", newList.toString());
newList.insertAt("node G", 0);
console.log("Add 'node G' @ 0: ", newList.toString());
newList.removeAt(4);
console.log("Remove node @ 4: ", newList.toString());
newList.removeAt(0);
console.log("Remove node @ 0: ", newList.toString());
