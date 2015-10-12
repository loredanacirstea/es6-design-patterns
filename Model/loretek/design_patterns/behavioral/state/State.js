

class Context {
    constructor() {
        this.created = true;
        this.state = state;
    }

    Request (){
        this.state.Handle();
    }
}

class State {
    constructor() {
        this.created = true;
    }

    Handle (){
    }
}

class ConcreteStateA extends State {
    constructor() {
        this.created = true;
    }

    Handle (){
    }
}

class ConcreteStateB extends State {
    constructor() {
        this.created = true;
    }

    Handle (){
    }
}