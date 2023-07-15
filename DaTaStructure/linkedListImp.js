class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}


class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size == 0
    }

    getSize(){
        return this.size
    }

    insertAtHead(value){
        /* step 1 : create new node 
            step 2 : if list is empty , head to  newly created node        */
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.head = newNode
        }
        else{
            newNode.next = this.head
            this.head = newNode
        }
        this.size++ 
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
        this.size++ 
    }

    insertAtIndex(data,index){
        
        if(index < 0 || index > this.size){ 
            console.log(`Invalid Index`)
            return
        }
        if(index == 0){
            this.insertAtHead(data)
        }
        else {
            const newNode = new Node(data)
            let temp = this.head
            for(let i=0; i<index-1; i++){
                temp = temp.next
            }
            newNode.next = temp.next
            temp.next = newNode
            this.size++ 
        }
    }

    removeFromIndex(index){
        if(index<0 || index>this.size){
            return null
        }
        let remove
        if(index == 0){
            remove = this.head
            this.head = this.head.next
        }
        else{
            let temp = this.head
            for(let i=0; i<index-1; i++) {
                temp = temp.next
            }
            remove = temp.next
            temp.next = remove.next
        }
        this.size-- 
        return remove.value 

    }

    removeValue(value){
        /*  1)check if list is empty , return null
            2) check if value is at head, point head to head.next
            3) else traverse
        */
        if(this.isEmpty()) return null

        let remove
        if(this.head.value === value){
            remove = this.head
            this.head = this.head.next
            this.size--
            return remove.value
        }
        else{
            let temp = this.head
            while(temp.next &&  temp.next.value != value ){
                temp = temp.next
            }
            if(temp.next){
                remove = temp.next
                temp.next = remove.next
                this.size--
                return remove.value
            }
            return null
            
        }
        
    }

    searchValue(value){
        /*  1)  check if list is empty return -1
            2) else traverse and check if value present and return index
            3) if value not found return -1
        */
        if(this.isEmpty()) return -1
        let temp = this.head
        let i=0
        while(temp){
            if(temp.value == value) return i
            temp = temp.next
            i++
        }
        return -1   
    }

    reverse(){
        if(this.isEmpty()) return null
        let prev = null
        let curr = this.head

        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    print(){
        if(this.isEmpty()) console.log(`List is Empty`)
        else{
            let curr = this.head
            let values = ""
            while(curr){
                values += `${curr.value} `
                curr = curr.next
            }
            console.log(values)
        }
    }

}

const list = new LinkedList()
/* console.log(`IS list Empty ? ${list.isEmpty()}`);
console.log(`List Size : ${list.getSize()}`);

delete at index
delete at tail
delete at  head
find length  

*/

list.insertAtHead(5)
list.insertAtHead(6)
list.insertAtTail(10)
list.insertAtIndex(100,0)
list.insertAtIndex(101,3)
//console.log(`Removed Element from Index: ${list.removeFromIndex(2)}`)
//console.log(`Removed Value:  ${list.removeValue(1011)}`)
console.log(`Search Value is at Index ${list.searchValue(10)}`)
console.log(list.getSize())
list.print()
list.reverse()
list.print()
