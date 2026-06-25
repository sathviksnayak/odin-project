

class Node{
     constructor(value=null){
        this.value = value
        this.nextNode = null
    }
}

class LinkedList{
    #head;
    #tail;

    constructor(){
        this.#head=null;
        this.#tail=null;
    }

    addatend(value=null){
        const newnode=new Node(value);
        
        if(this.#head==null){
            this.#head=newnode;
            this.#tail=newnode;

        }
        else if(this.#head.nextNode==null){
            this.#head.nextNode=newnode;
            this.#tail=newnode;
        }
        else{
            this.#tail.nextNode=newnode;
            this.#tail=newnode;
        }
    }

    addatbegin(value=null){
         const newnode=new Node(value);
        if(this.#head==null){
            this.#head=newnode;
            this.#tail=newnode;
        }
        else{
            newnode.nextNode=this.#head;
            this.#head=newnode;
        }
    }
    checkIndex(index){
    if(index < 0 || index > this.size()){
        throw new RangeError("Out of bounds");
    }
}
    size(){
        if(!this.#head) return 0;
     
            let ptr=this.#head;
            let size=1;
            while(ptr.nextNode){
                size++;
                ptr=ptr.nextNode;
            }
        return size;
    }
    head(){
        if (this.#head == null){
            return undefined
        }
        return this.#head.value
    }
    tail(){
        if (this.#head == null){
            return undefined
        }
        return this.#tail.value
    }
    at(index){
        if (index < 0){
            return undefined
        }
        if (index >= this.size()){
            return undefined
        }

        let currentNode = this.#head
        for (let i = 0; i < index; i++){
            currentNode = currentNode.nextNode
        }
        return currentNode.value
    }

    pop(){
        if (this.#head == null){
            return undefined
        }

        const poppedNode = this.#head
        if (poppedNode.nextNode){
            this.#head = poppedNode.nextNode
        }else{
            this.#head = null
        }
        return poppedNode.value

    }

    contains(searchValue){

        let currentNode = this.#head
        for (let i = 0; i<this.size();i++){
            if (currentNode.value == searchValue){
                return true
            }
            currentNode = currentNode.nextNode
        }
        return false
    }

    findIndex(searchValue){


        let currentNode = this.#head
        for (let i = 0; i<this.size(); i++){
            if (currentNode.value == searchValue){
                return i
            }
            currentNode = currentNode.nextNode
        }
        return -1
    }

    toString(){

        let currentNode = this.#head
        let string = ""
        while (currentNode){
            string += `(${currentNode.value})-> `
            currentNode = currentNode.nextNode
        }
        return string + "null"
    }

    insertAt(index, ...values){
        this.checkIndex(index)

        const newNodes = values.map((value)=> new Node(value))

        if (newNodes.length > 1){
            for (let i =0;i<newNodes.length -1;i++){
                newNodes[i].nextNode = newNodes[i+1]
            }
        }

        let selectedNode = this.#head
        let previousNode = this.#head
        for (let i=0; i<index; i++){
            previousNode = selectedNode
            selectedNode = selectedNode.nextNode
        }

        if (previousNode != selectedNode){
            previousNode.nextNode = newNodes[0]
        }
        
        newNodes[newNodes.length -1].nextNode = selectedNode

        if (index == 0){
            this.#head = newNodes[0]
        }
    }

removeAt(index){
    this.checkIndex(index);

    if(index === 0){
        this.#head = this.#head.nextNode;
        return;
    }

    let prev = this.#head;
    let curr = this.#head;

    for(let i=0;i<index;i++){
        prev = curr;
        curr = curr.nextNode;
    }

    prev.nextNode = curr.nextNode;
}

}
module.exports = LinkedList;