var Implementor = Class({
    create: function() {
        this.created = true;
    },
    OperationImp: function(){
    }
});

var Abstraction = Class({
    create: function() {
        this.created = true;
    },
    Operation: function(){
        var imp = new Implementor();
        imp.OperationImp();
    }
});

var RefinedAbstraction = Abstraction.extend({
});


var ConcreteImplementorA = Implementor.extend({
    OperationImp: function(){
        return 'A';
    }
});

var ConcreteImplementorB = Implementor.extend({
    OperationImp: function(){
        return 'B';
    }
});