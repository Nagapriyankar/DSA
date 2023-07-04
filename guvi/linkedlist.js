class Node{
    //constructor is a special class
    //it will be called whenever we create an object to the class
    constructor(data) {
        this.data = data;
        this.next = null;
    } 
}



let node1 = new Node(3);
let node2 = new Node(5);
node1.next = node2;
node2.next = new Node(7)

//console.log(node2.next.next);

/* 
Node { 
    data: 3, 
    next: 
 }
 */

 class LinkedList {
    constructor(){
        this.head = null;
    }

    insertAtTail(data){
        let newNode = new Node(data);  //create new node
        if(this.head == null){          //add newnode to head if list is empty
            this.head = newNode
        }
        else{                           //if the list  is non empty
            let tail = this.head;           //assign tail to head , traverse tail to the end node
            while(tail.next != null){       //add element next to end 
                tail = tail.next;
            }
            tail.next = newNode;
        }
    }

    insertAtHead(){}

    deleteAtHead(){}

    deleteAtNode(){}

    length(){}

}
    
let list = new LinkedList();
list.insertAtTail(3);
list.insertAtTail(4);
list.insertAtTail(5);

console.log(JSON.stringify(list));