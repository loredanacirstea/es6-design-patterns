'use strict';

class Visitor {
    constructor() {
    }

    VisitConcreteElementA (ConcreteElementA){
    }

    VisitConcreteElementB (ConcreteElementB){
    }  
}

class ConcreteVisitor1 extends Visitor {
    constructor() {
        super()
        facade.log("ConcreteVisitor1 created");
    }

    VisitConcreteElementA (ConcreteElementA){
        facade.log("ConcreteVisitor1 visited ConcreteElementA");
    }

    VisitConcreteElementB (ConcreteElementB){
        facade.log("ConcreteVisitor1 visited ConcreteElementB");
    }  
}

class ConcreteVisitor2 extends Visitor {
    constructor() {
        super()
        facade.log("ConcreteVisitor2 created");
    }

    VisitConcreteElementA (ConcreteElementA){
        facade.log("ConcreteVisitor2 visited ConcreteElementA");
    }

    VisitConcreteElementB (ConcreteElementB){
        facade.log("ConcreteVisitor2 visited ConcreteElementB");
    }  
}

class ObjectStructure {
    constructor() {
        facade.log("ObjectStructure created");
    }
}

class Element {
    constructor() {
    }

    Accept (visitor){
    }
}

class ConcreteElementA extends Element {
    constructor() {
        super()
        facade.log("ConcreteElementA created");
    }

    Accept (visitor){
        visitor.VisitConcreteElementA(this);
    }

    OperationA (){
        facade.log("ConcreteElementA OperationA");  
    }
}

class ConcreteElementB extends Element {
    constructor() {
        super()
        facade.log("ConcreteElementB created");
    }

    Accept (visitor){
        visitor.VisitConcreteElementB(this);
    }

    OperationB (){
        facade.log("ConcreteElementB OperationB");  
    }
}


function init_Visitor() {
    let visitor1 = new ConcreteVisitor1();
    let visitor2 = new ConcreteVisitor2();
    let elementA = new ConcreteElementA();
    let elementB = new ConcreteElementB();
    elementA.Accept(visitor1);
    elementB.Accept(visitor2);
}