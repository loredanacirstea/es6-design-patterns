'use strict';

class Implementor {
    constructor() {
        this.created = true;
    }

    OperationImp (){
    }
}

class Abstraction {
    constructor() {
        this.created = true;
    }

    Operation (){
        var imp = new Implementor();
        imp.OperationImp();
    }
}

class RefinedAbstraction extends Abstraction {
}


class ConcreteImplementorA extends Implementor {
    OperationImp (){
        return 'A';
    }
}

class ConcreteImplementorB extends Implementor {
    OperationImp (){
        return 'B';
    }
}

function init_Bridge() {
    facade.log("Not yet implemented");
}