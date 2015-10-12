var AbstractFactory = Class({
    create: function(factory) {
        facade.log("AbstractFactory class created");
        this.name = factory;
        switch(factory){
            case "ConcreteFactory1":
                this.factory = ConcreteFactory1.instance();
                break;
            case "ConcreteFactory2":
                this.factory = ConcreteFactory2.instance();
                break;
        }
    },
    createProductA: function(){
        facade.log("AbstractFactory calls " + this.name + " to createProductA");
        return this.factory.createProductA();
    },
    createProductB: function(){
        facade.log("AbstractFactory calls " + this.name + " to createProductB");
        return this.factory.createProductB();
    }
});

var ConcreteFactory1 = AbstractFactory.extend({
    singleton: true,
    create: function(){
        facade.log("ConcreteFactory1 class created");
    },
    createProductA: function(){        
        facade.log("ProductA created by ConcreteFactory1");
        return new AbstractProductA("ProductA1");
    },
    createProductB: function(){
        facade.log("ProductB created by ConcreteFactory1");
        return new AbstractProductB("ProductB1");
    }
});

var ConcreteFactory2 = AbstractFactory.extend({
    singleton: true,
    create: function(){
        facade.log("ConcreteFactory2 class created");
    },
    createProductA: function(){
        facade.log("ProductA created by ConcreteFactory2");
        return new AbstractProductA("ProductA2");
    },
    createProductB: function(){
        facade.log("ProductB created by ConcreteFactory2");
        return new AbstractProductB("ProductB2");
    }
});

var AbstractProductA = Class({
    create: function(product) {
        facade.log("AbstractProductA class created");
        this.product = null;
        switch(product){
            case "ProductA1":
                this.product = new ProductA1();
                break;
            case "ProductA1":
                this.product = new ProductA2();
                break;
        }
        return this.product;
    }
});

var AbstractProductB = Class({
    create: function(product) {
        facade.log("AbstractProductB class created");
        this.product = null;
        switch(product){
            case "ProductB1":
                this.product = new ProductB1();
                break;
            case "ProductB1":
                this.product = new ProductB2();
                break;
        }
        return this.product;
    }
});


var ProductA1 = AbstractProductA.extend({
    create: function() {
        facade.log("ProductA1 class created");
    }
});

var ProductA2 = AbstractProductA.extend({
    create: function() {
        facade.log("ProductA2 class created");
    }
});

var ProductB1 = AbstractProductB.extend({
    create: function() {
        facade.log("ProductB1 class created");
    }
});

var ProductB2 = AbstractProductB.extend({
    create: function() {
        facade.log("ProductB2 class created");
    }
});