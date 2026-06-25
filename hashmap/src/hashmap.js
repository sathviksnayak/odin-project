

class hashmap{


    constructor(capacity=10){
        this.capacity=capacity;
        this.size=0;
        this.bucket=new Array(this.capacity).fill(null);

    }

  hash(key){
    let hashword=0;
    const prime=31;

    for(let i=0;i<key.length;i++){
        hashword=(prime*hashword+key.charCodeAt(i));
    }
    hashword=hashword%this.capacity;
    return hashword;
  }
set(key,value){
    let hash=this.hash(key);
    let val=this.bucket[hash];
    if(!val){
        this.bucket[hash]={ key: key,
  value: value,
  next: null};
      this.size++;
    }
    else{
        console.log("collision");
        let current=val;
while(current){
    if(current.key === key){
        current.value = value;   // update existing
        return;
    }

    if(current.next === null) break;

    current = current.next;
}

current.next = {
    key,
    value,
    next: null
};
        current.next={ key: key,
  value: value,
  next: null};
         this.size++;
         if(this.size/this.capacity>0.5){
            this.resize()
         }
    }

   
}
get(key){
     const index = this.hash(key);

    let curr=this.bucket[index];
    if(!curr) return null;
            while (curr) {
            if (curr.key === key) return curr.value;
            curr = curr.next;
        }
        return null;
}
has(key){
       return this.get(key) !== null;
}
remove(key){
            const index = this.hash(key);

        let current = this.bucket[index];
        let prev = null;

        while (current) {
            if (current.key === key) {
                if (!prev) {
                    this.bucket[index] = current.next;
                } else {
                    prev.next = current.next;
                }

                this.size--;
                return true;
            }

            prev = current;
            current = current.next;
        }

        return false;
}
length(){
     return this.size;
}
clear(){
        this.bucket = new Array(this.capacity).fill(null);
        this.size = 0;

}
keys(){
            const result = [];

        for (let bucket of this.bucket) {
            let current = bucket;

            while (current) {
                result.push(current.key);
                current = current.next;
            }
        }

        return result;
}
values(){
            const result = [];

        for (let bucket of this.bucket) {
            let current = bucket;

            while (current) {
                result.push(current.value);
                current = current.next;
            }
        }

        return result;
}
entries(){
            const result = [];

        for (let bucket of this.bucket) {
            let current = bucket;

            while (current) {
                result.push([current.key, current.value]);
                current = current.next;
            }
}
return result;
}

    resize() {
        const oldBuckets = this.bucket;

        this.capacity *= 2;
        this.bucket = new Array(this.capacity).fill(null);
        this.size = 0;

        for (let bucket of oldBuckets) {
            let current = bucket;

            while (current) {
                this.set(current.key, current.value);
                current = current.next;
            }
        }
    }
}