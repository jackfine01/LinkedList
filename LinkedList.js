class linkedList {
    constructor(head, tail, size){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    append(value){
        let node = new Node(element);
        let current;
        node.value = value;
        if (this.tail == null && this.head == null){
            this.head = node;
            this.tail = node;
        }
        else {
            current = this.tail;
            current.nextNode = node;
            this.tail = node;
        };
        this.size++;
    }
    prepend(value){
        let node = new Node(element);
        let current;
        node.value = value;
        if (this.head == null){
            this.head = node;
            this.tail = node;
        }
        else{
            current = this.head;
            this.head = node;
            node.nextNode = current;
        }
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