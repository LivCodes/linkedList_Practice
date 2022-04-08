// Linked Lists
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

a.next = b;
b.next = c;
c.next = d;

// A -> B -> C -> D

// iterative approach to printing each node value
const printLinkedList = (head) => {
    let current = head;
    while(current != null) {
        console.log(current.val);
        current = current.next;
    } 
};

// printLinkedList(a);
// recursive approach to printing each node value
const printLinkedListRecursive = (head) => {
    if(head === null) return;
    console.log(head.val);
    printLinkedListRecursive(head.next);
}

// printLinkedListRecursive(a);

// ********************************************************************

//iterative approach to returning the linked list's values in an array
const linkedListValues = head => {
    const arr = [];
    let current = head;
    while(current != null){
      arr.push(current.val);
      current = current.next;
    }
    return arr;
}

// linkedListValues(a);

//recursive approach to returning the linked list's values in an array
const linkedListValuesRecursive = head => {
    const values = [];
    fillValues(head, values);
    return values;
}

const fillValues = (head, values) => {
    if(head === null) return;
    values.push(head.val);
    fillValues(head.next, values);
}

// linkedListValuesRecursive(a);

// ************************************************************************
// approach to delete the head node

const deleteHead = head => {
    if (head == null) {
      return null;
    }
    return head.next;
  }

// deleteHead(a);

// ***********************************************************************
// approach to sum the values in the linked list

const sumList = (head) => {
    // todo
    const arr = [];
    let current = head;
    if(current === null) return 0;
    while(current != null){
      arr.push(current.val)
      current = current.next;
    }
    return arr.reduce((acc, cv) => acc + cv);
  };

sumList(a); // will return 'ABCD' but if data were #'s will add them