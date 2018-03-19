function Node(data) {
    this.data = data;
    this.next = null;
}

function linkedList() {
    this.number = 0;
    this.head = null;
    this.tails = null;
}

linkedList.prototype.length = function(){
    return this.number;
}

linkedList.prototype.add = function(data){
    var node = new Node(data);
    if(head == null){
        this.head = node;
        this.tail = node;
    }else{
        this.tail.next = node;
        this.tail = node;
    }
    this.number++;
}

module.exports = linkedList;