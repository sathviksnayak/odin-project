const { captureOwnerStack } = require("react");

class node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}
class bst{
    constructor(array){
        this.arr=[...new Set(array)].sort((a, b) => a - b);
        this.root=this.buildtree(this.arr);
        this.isunbalanced=false;
    }
    buildtree(array){
    if (array.length === 0) {
      return null;
    }

       let middle = Math.floor(array.length/2);
        let root=new node(array[middle]);
        root.left=this.buildtree(array.slice(0,middle));
        root.right=this.buildtree(array.slice(middle+1));
        return root;

        
    }
    search(value){
        let cur=this.root;

        while(cur){
            if(cur.value===value) return cur;
            else if(value>cur.value) cur=cur.right;
            else cur=cur.left;
        }
        return null;
    }

height(root){
    if(!root) return 0;

    let left = this.height(root.left);
    let right = this.height(root.right);

    if(Math.abs(left-right)>1)
        this.isunbalanced=true;

    return 1 + Math.max(left,right);
}
    inorder(root,arr){
        if(!root) return;

        this.inorder(root.left,arr)
        arr.push(root.value);
        this.inorder(root.right,arr)
    }
    balance(){
        this.arr=[...new Set(this.arr)].sort((a, b) => a - b);
        this.root=this.buildtree(this.arr);
        this.isunbalanced=false;
    }
  insert(value) {
    this.arr.push(value)
    if (!this.root) {
      this.root = new node(value);
      return;
    }
    let cur = this.root;
    while (cur) {
      if (cur.value === value) {
        return;
      }
      if (value < cur.value) {
        if (!cur.left) {
          cur.left = new node(value);
          return;
        }
        cur = cur.left;
      } else {
        if (!cur.right) {
          cur.right = new node(value);
          return;
        }
        cur = cur.right;
      }
    }
  }
  checkBalanced(){
    this.isunbalanced=false;
    this.height(this.root);
    return !this.isunbalanced;
}

delete(value){
    let cur=this.root;
    let prev=null;

    // find node
    while(cur && cur.value!==value){
        prev=cur;
        if(value<cur.value) cur=cur.left;
        else cur=cur.right;
    }

    if(!cur){
        console.log("not found");
        return;
    }

    // CASE 1: leaf
    if(!cur.left && !cur.right){

        if(cur===this.root){
            this.root=null;
        }
        else if(prev.left===cur){
            prev.left=null;
        }
        else{
            prev.right=null;
        }
    }

    // CASE 2: one child
    else if(!cur.left || !cur.right){

        let child = cur.left ? cur.left : cur.right;

        if(cur===this.root){
            this.root=child;
        }
        else if(prev.left===cur){
            prev.left=child;
        }
        else{
            prev.right=child;
        }
    }

    // CASE 3: two children
    else{

        let successor=cur.right;
        let successorParent=cur;

        while(successor.left){
            successorParent=successor;
            successor=successor.left;
        }

        cur.value=successor.value;

        if(successorParent.left===successor){
            successorParent.left=successor.right;
        }
        else{
            successorParent.right=successor.right;
        }
    }
}
}