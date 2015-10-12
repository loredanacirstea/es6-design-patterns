var Visitor = Class({
    create: function(){
        facade.log("Visitor class created:");
    },
    VisitConcreteElementA: function(ConcreteElementA){
    },
    VisitConcreteElementB: function(ConcreteElementB){
    }  
});

var ConcreteVisitor1 = Visitor.extend({
    create: function(){
        this.name = "ConcreteVisitor1";
        Visitor.prototype.create();
        facade.log("ConcreteVisitor1");
    },
    VisitConcreteElementA: function(ConcreteElementA){
        facade.log("ConcreteVisitor1 visited ConcreteElementA");
    },
    VisitConcreteElementB: function(ConcreteElementB){
        facade.log("ConcreteVisitor1 visited ConcreteElementB");
    }  
});

var ConcreteVisitor2 = Visitor.extend({
    create: function(){
        this.name = "ConcreteVisitor2";
        Visitor.prototype.create();
        facade.log("ConcreteVisitor2");
    },
    VisitConcreteElementA: function(ConcreteElementA){
        facade.log("ConcreteVisitor2 visited ConcreteElementA");
    },
    VisitConcreteElementB: function(ConcreteElementB){
        facade.log("ConcreteVisitor2 visited ConcreteElementB");
    }  
});

var ObjectStructure = Class({
    create: function(){
        facade.log("ObjectStructure class created");
    }
});

var Element = Class({
    create: function(){
        facade.log("Element class created");
    },
    Accept: function(visitor){
        facade.log("Element class has accepted the "+ visitor.name +" visitor");
    }
});

var ConcreteElementA = Element.extend({
    Accept: function(visitor){
        Element.prototype.Accept(visitor);
        visitor.VisitConcreteElementA(this);
    },
    OperationA: function(){
        facade.log("ConcreteElementA OperationA");  
    }
});

var ConcreteElementB = Element.extend({
    Accept: function(visitor){
        Element.prototype.Accept(visitor);
        visitor.VisitConcreteElementB(this);
    },
    OperationB: function(){
        facade.log("ConcreteElementB OperationB");  
    }
});