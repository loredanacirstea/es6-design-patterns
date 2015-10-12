'use strict';

class Flyweight {
    constructor() {
        this.created = true;
    }

    Operation (extrinsicState){
        return extrinsicState;
    }
}

class FlyweightFactory extends Flyweight {
    constructor() {
        this.created = true;
        this.flyweights = [];
    }

    GetFlyweight (key){
        if(this.flyweights[key] != 'undefined'){
            return this.flyweights[key];
        }
        else{
            this.flyweights[key] = new Flyweight();
            return this.flyweights[key];
        }
    }
}

class ConcreteFlyweight extends Flyweight {
   constructor() {
        this.created = true;
        this.intrinsicState = '';
    }

    Operation (extrinsicState){
        return extrinsicState;
    }
}

class UnsharedConcreteFlyweight extends Flyweight {
    constructor() {
        this.created = true;
        this.allState = '';
    }

    Operation (extrinsicState){
        return extrinsicState;
    }
}