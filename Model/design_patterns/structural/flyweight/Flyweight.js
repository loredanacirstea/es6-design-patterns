'use strict';

class FlyweightFactory {
    constructor() {
        this.flyweights = {};
        facade.log('FlyweightFactory created')
    }

    GetFlyweight (key){
        if(this.flyweights[key]){
            return this.flyweights[key];
        }
        else{
            this.flyweights[key] = new ConcreteFlyweight(key);
            return this.flyweights[key];
        }
    }

    CreateGibberish (keys) {
        return new UnsharedConcreteFlyweight(keys, this)
    }
}

class Flyweight {
    constructor() {
    }

    Operation (extrinsicState){
    }
}


class ConcreteFlyweight extends Flyweight {
   constructor(key) {
        super()
        this.intrinsicState = key
        facade.log('ConcreteFlyweight created')
    }

    Operation (extrinsicState){
        return extrinsicState + this.intrinsicState
    }
}

class UnsharedConcreteFlyweight extends Flyweight {
    constructor(keys, flyweights) {
        super()
        this.flyweights = flyweights
        this.keys = keys
        facade.log('UnsharedConcreteFlyweight created')
    }

    Operation (extrinsicState){
        var key, word = ''

        for(var i = 0; i < extrinsicState; i++) {
            //random key
            key = this.keys[Math.floor(Math.random() * (this.keys.length))]
            word = this.flyweights.GetFlyweight(key).Operation(word)
        }
        facade.log('UnsharedConcreteFlyweight Operation: ')
        facade.log(word)
    }
}

function init_Flyweight() {
    var flyweights = new FlyweightFactory()
    var gibberish = flyweights.CreateGibberish(['-', '+', '*'])
    gibberish.Operation(5)
    gibberish.Operation(10)
}