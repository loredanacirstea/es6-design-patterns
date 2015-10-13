'use strict';
class Handler {
    constructor() {
        this.created = true;
    }
    HandleRequest() {
    }
}

class ConcreteHandler1 extends Handler {
    HandleRequest() {

    }
}

class ConcreteHandler2 extends Handler {
    HandleRequest() {
    
    }
}