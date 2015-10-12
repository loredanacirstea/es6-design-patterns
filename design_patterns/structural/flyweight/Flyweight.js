var Flyweight = Class({
    create: function() {
        this.created = true;
    },
    Operation: function(extrinsicState){
        return extrinsicState;
    }
});

var FlyweightFactory = Flyweight.extend({
    create: function(){
        this.created = true;
        this.flyweights = [];
    },
    GetFlyweight: function(key){
        if(this.flyweights[key] != 'undefined'){
            return this.flyweights[key];
        }
        else{
            this.flyweights[key] = new Flyweight();
            return this.flyweights[key];
        }
    }
});

var ConcreteFlyweight = Flyweight.extend({
    create: function(){
        this.created = true;
        this.intrinsicState = '';
    },
    Operation: function(extrinsicState){
        return extrinsicState;
    }
});

var UnsharedConcreteFlyweight = Flyweight.extend({
    create: function(){
        this.created = true;
        this.allState = '';
    },
    Operation: function(extrinsicState){
        return extrinsicState;
    }
});