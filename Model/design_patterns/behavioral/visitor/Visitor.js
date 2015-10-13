'use strict';

class Visitor {
    constructor() {
        facade.log("Visitor class created:");
    }

    VisitConcreteElementA (ConcreteElementA){
    }

    VisitConcreteElementB (ConcreteElementB){
    }  
}

class ConcreteVisitor1 extends Visitor {
    constructor() {
        this.name = "ConcreteVisitor1";
        Visitor.prototype.create();
        facade.log("ConcreteVisitor1");
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
        this.name = "ConcreteVisitor2";
        Visitor.prototype.create();
        facade.log("ConcreteVisitor2");
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
        facade.log("ObjectStructure class created");
    }
}

class Element {
    constructor() {
        facade.log("Element class created");
    }

    Accept (visitor){
        facade.log("Element class has accepted the "+ visitor.name +" visitor");
    }
}

class ConcreteElementA extends Element {
    Accept (visitor){
        Element.prototype.Accept(visitor);
        visitor.VisitConcreteElementA(this);
    }

    OperationA (){
        facade.log("ConcreteElementA OperationA");  
    }
}

class ConcreteElementB extends Element {
    Accept (visitor){
        Element.prototype.Accept(visitor);
        visitor.VisitConcreteElementB(this);
    }

    OperationB (){
        facade.log("ConcreteElementB OperationB");  
    }
}


function init_Visitor() {
    var visitor1 = new ConcreteVisitor1();
    var visitor2 = new ConcreteVisitor2();
    var element = new ConcreteElementA();
    element.Accept(visitor1);
    element.Accept(visitor2);
}