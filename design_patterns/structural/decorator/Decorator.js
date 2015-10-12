var Component = Class({
    create: function() {
        this.created = true;
    },
    Operation: function(){
    }
});

var ConcreteComponent = Component.extend({
    Operation: function(){
    }
});

var Decorator = Component.extend({
    Operation: function(){
    }
});

var ConcreteDecoratorA = Decorator.extend({
    create: function(){
        this.addedState = '';
    },
    Operation: function(){
    }
});

var ConcreteDecoratorB = Decorator.extend({
    Operation: function(){
    },
    AddedBehavior: function (){
    }
});