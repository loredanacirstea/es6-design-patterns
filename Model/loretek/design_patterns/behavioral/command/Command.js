'use strict';

class Invoker {
    constructor() {
        this.created = true;
    }
}

class Command {
    constructor() {
        this.created = true;
    }

    Execute() {
    return '';
    }
}

class Receiver {
    constructor() {
        this.created = true;
    }

    Action() {
        return '';
    }
}

class ConcreteCommand extends Command {
    constructor(state) {
        this.created = true;
        this.state = state;
    }
    
    Execute(receiver) {
        receiver.Action();
    }
}