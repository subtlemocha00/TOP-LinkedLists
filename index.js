const LinkedList = () => {
	let headNode = null;

	const head = () => {
		return headNode;
	};

	const getTail = () => {
		if (headNode === null) {
			return headNode;
		}
		let tail = headNode;
		while (tail.nextNode !== null) {
			tail = tail.nextNode;
		}
		return tail;
	};

	const prepend = (value) => {
		let temp = null;
		if (headNode !== null) {
			temp = headNode;
			headNode = value;
			headNode.nextNode = temp;
		}
		headNode = Node(value);
		headNode.nextNode = temp;
	};

	const append = (value) => {
		if (headNode === null) {
			headNode = value;
		}
		let currentNode = headNode;
		while (currentNode.nextNode !== null) {
			currentNode = currentNode.nextNode;
		}
		currentNode.nextNode = Node(value);
	};

	const size = () => {
		let counter = 0;
		if (headNode !== null) {
			counter++;
		}
		let currentNode = headNode;
		while (currentNode.nextNode !== null) {
			counter++;
			currentNode = currentNode.nextNode;
		}
		return counter;
	};

	const at = (position) => {
		let currentNode = headNode;
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
		let currentNode = headNode;
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
		let currentNode = headNode;
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
		let currentNode = headNode;
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
		if (headNode === null) {
			return "Nothing to console.";
		}
		let currentNode = headNode;
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
		if (headNode === null) {
			return null;
		}
		let newNode = Node(value);
		let counter = index;
		let currentNode = headNode;
		while (counter > 0) {
			currentNode = currentNode.nextNode;
			counter--;
		}
		let temp = currentNode.nextNode;
		if (index <= 0) {
			newNode.nextNode = currentNode;
			headNode = newNode;
		} else {
			currentNode.nextNode = newNode;
			currentNode = currentNode.nextNode;
			currentNode.nextNode = temp;
		}
	};

	const removeAt = (index) => {
		if (headNode === null) {
			return null;
		}
		let currentNode = headNode;
		let counter = index - 1;
		while (counter > 0) {
			currentNode = currentNode.nextNode;
			counter--;
		}
		if (index <= 0) {
			headNode = currentNode.nextNode;
		}
		currentNode.nextNode = currentNode.nextNode.nextNode;
	};

	return {
		head,
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

// ----- DEMO ----- //
const newList = LinkedList();
console.log(newList.head());
newList.prepend("node 1");
newList.prepend("node 2");
newList.prepend("node 3");
newList.prepend("node 4");
console.log(newList.size());
newList.append("node A");
newList.append("node B");
newList.append("node C");
console.log(newList.head());
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
