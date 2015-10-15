'use strict';

class Invoker {
    constructor() {
        facade.log('Invoker created')
    }

    StoreCommand(command) {
        this.command = command
    }
}

class Command {
    constructor() {
    }

    Execute() {
    }
}

class ConcreteCommand extends Command {
    constructor(receiver, state) {
        super()
        this.receiver = receiver
        facade.log('ConcreteCommand created')
    }
    
    Execute() {
        facade.log('ConcreteCommand Execute')
        this.receiver.Action();
    }
}

class Receiver {
    constructor() {
        facade.log('Receiver created')
    }

    Action() {
        facade.log('Receiver Action')
    }
}


function init_Command() {
    var invoker = new Invoker()
    var receiver = new Receiver()
    var command = new ConcreteCommand(receiver)
    invoker.StoreCommand(command)
    invoker.command.Execute()
}