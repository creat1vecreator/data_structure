function Stack() {
    this.bucket = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;


    function push(element) {
        this.bucket[this.top++] = element;
    }

    function peek() {
        return this.bucket[this.top - 1];
    }


    function clear() {
        this.top = 0;
    }

    function length() {
        return this.top;
    }

    function pop() {
        return this.bucket[--this.top];
    }
}


let s = new Stack();
s.push(7);
s.push(8);

console.log(s.peek());
console.log(s.length());
console.log(s.bucket);