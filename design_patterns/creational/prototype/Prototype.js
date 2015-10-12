var Prototype = Class({
    create: function(prototype) {
        facade.log("Prototype class created");
        switch(prototype){
            case "ConcretePrototype1":
                this.prototype = new ConcretePrototype1();
                break;
            case "ConcretePrototype2":
                this.prototype = new ConcretePrototype2();
                break;
        }
    },
    Clone: function(){
        this.prototype.Clone();
    }
});

var ConcretePrototype1 = Prototype.extend({
    create: function() {
        facade.log("ConcretePrototype1 class created");
    },
    Clone: function(){
        facade.log("ConcretePrototype1 cloned");
        return this;
    }
});

var ConcretePrototype2 = Prototype.extend({
    create: function() {
        facade.log("ConcretePrototype2 class created");
    },
    Clone: function(){
        facade.log("ConcretePrototype2 cloned");
        return this;
    }
});