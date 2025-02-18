class linkedList {
    constructor(head, tail, size){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    append(value){
        let node = new Node(element);
        let current;

        if (this.tail == null)
            this.tail = node;
        else{
            current = this.tail;
        }
        // move everything up one in index?
        //increase size
        this.size++;
    }
    prepend(value){
        let node = new Node(element);
        let current;

        if (this.head == null)
            this.head = node;
        else{
            current = this.head;
        }
        // move everything down one in index?
        //increase size
        this.size++;
    }
    size(){
        return this.size;
    }
    head(){
        return this.head;
    }
    tail(){
        return this.tail;
    }
    at(index){

    }
    pop(){

    }
    contains(){

    }
    find(value){

    }
    toString(){
        
    }
}
export{linkedList}

class Node {
    constructor(value, nextNode) {
        this.value = null;
        this.nextNode = null;
    }
}
export{Node}