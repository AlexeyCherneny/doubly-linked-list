const Node = require('./node');

class LinkedList {
    constructor() {
    	this.length = 0;
    	this._head = null;
    	this._tail = null;
    }

    append(data) {
        var node = new Node(data);

        if (this.length) {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        } else {
            this._head = node;
            this._tail = node;
        }
 
        this.length++;
        
        return this;
    }

    head() {
        if (this._head) {
            return this._head.data;
        } else {
            return null;
        }
    }

    tail() {
        if (this._head) {
            return this._tail.data;    
        } else {
            return null;
        }        
    }

    at(index) {
        var curNode = this._head;

        for (var i=0; i<index; i++) {
            curNode = curNode.next;
        }

        return curNode.data;
    }

    insertAt(index, data) {
        var curNode = this._head;
        var newNode = new Node(data);

        for (var i=0; i<index; i++) {
            curNode = curNode.next;
        }
        curNode = curNode.prev;

        newNode.next = curNode.next;
        curNode.next = newNode;
        newNode.prev = curNode;

        return this;
    }

    isEmpty() {
        if (this.length == 0) {
            return true;
        } else {
            return false;
        }

    }

    clear() {
        this._tail = null;
        this._head = null;

        this.length = 0;

        return this;
    }

    deleteAt(index) {
        var curNode = this._head;
        var tempNode;

        for (var i=0; i<index; i++) {
            curNode = curNode.next;
        }
         
        curNode.prev.next = curNode.next;

        return this;
    }

    reverse() {
        var beg = this._head;
        var end = this._tail;
        var j = this.length;
        var temp;

        for (var i=0; i<this.length/2; i++) {            

            for (var k=0; k<i; k++) {
                beg = beg.next;
            }  
            for (var k=j; k<this.length; k++) {
                end = end.prev;
            }
            
            if (beg != end) {
                temp = beg.data;
                beg.data = end.data;
                end.data = temp;
            }

            j--;        
        }
        return this;
    }

    indexOf(data) {
        var curNode = this._head;
        for (var i=0; i<this.length; i++) {
            if (curNode) {
                if (curNode.data == data) {
                    return i;
                }
            }

            curNode = curNode.next;
        }

        return -1;
    }
}

module.exports = LinkedList;
