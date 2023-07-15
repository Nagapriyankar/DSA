class Node{
    //constructor is a special class
    //it will be called whenever we create an object to the class
    constructor(data){
        this.data = data;
        this.next = null;
    } 
}



/* let node1 = new Node(3);
let node2 = new Node(5);
node1.next = node2;
node2.next = new Node(7) */

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

    insertAtHead(data){
        let newNode = new Node(data);
        newNode.next = this.head
        this.head = newNode
        
    }

    deleteAtHead(){
        if(this.head != null){
            this.head = this.head.next
        }
    }

    deleteAtTail(){
        if(this.head != null){
            if(this.head.next == null)  this.head == null
            else{
                let thead = this.head
            while(thead.next.next != null){
                thead = thead.next
            }
            thead.next = null
            }
        }
    }


    length() {
        let nodeCount = 0
        let thead = this.head

        while(thead != null){
            nodeCount++
            thead = thead.next
        }
        return nodeCount
    }

    toArray(){
        let nodeArr = [];
        let thead = this.head

        while(thead != null){
            nodeArr.push(thead.data)
            thead = thead.next
        }
        return nodeArr
    }

}
    
let list = new LinkedList();
 list.insertAtHead(3);
 list.insertAtTail(4);
 list.insertAtHead(5);
 list.insertAtHead(17);
 list.insertAtTail(19);
 console.log(JSON.stringify(list))
 console.log(list.toArray())
 console.log(list.length())




/* 
list =  LinkedList{
    head: Node
}
 */