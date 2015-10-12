var Product = Class({
    create: function() {
        this.created = true;
    }
});

var ConcreteProduct = Product.extend({
    create: function() {
        this.created = true;
    }
});

var Creator = Class({
    create: function() {
        this.created = true;
    },
    FactoryMethod: function(){

    },
    AnOperation: function(){

    }
});

var ConcreteCreator = Creator.extend({
    create: function() {
        this.created = true;
    },
    FactoryMethod: function(){
        this.product = new ConcreteProduct();
    }
});