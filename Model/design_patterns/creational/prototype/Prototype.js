'use strict';

class Prototype {
    constructor(prototype) {
    }

    Clone (){
    }
}

class ConcretePrototype1 extends Prototype {
    constructor() {
        facade.log("ConcretePrototype1 created");
        super()
        this.feature = "feature 1"
    }

    setFeature(key, val) {
        this[key] = val
    }

    Clone (){
        facade.log('custom cloning function')
        let clone = new ConcretePrototype1()
        let keys = Object.keys(this)

        keys.forEach(k => clone.setFeature(k, this[k]))

        facade.log("ConcretePrototype1 cloned");
        return clone;
    }
}

class ConcretePrototype2 extends Prototype {
    constructor() {
        facade.log("ConcretePrototype2 created");
        super()
    }

    Clone (){
        facade.log("ConcretePrototype2 cloned");
        return clone;
    }
}

function init_Prototype () {
    var proto1 = new ConcretePrototype1()
    proto1.setFeature('feature', "feature 22")
    var clone1 = proto1.Clone()
    facade.log(clone1.feature)
}