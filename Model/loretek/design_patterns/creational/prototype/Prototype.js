'use strict';

class Prototype {
    constructor(prototype) {
        facade.log("Prototype class created");
        switch(prototype){
            case "ConcretePrototype1":
                this.prototype = new ConcretePrototype1();
                break;
            case "ConcretePrototype2":
                this.prototype = new ConcretePrototype2();
                break;
        }
    }

    Clone (){
        this.prototype.Clone();
    }
}

class ConcretePrototype1 extends Prototype {
    constructor() {
        facade.log("ConcretePrototype1 class created");
    }

    Clone (){
        facade.log("ConcretePrototype1 cloned");
        return this;
    }
}

class ConcretePrototype2 extends Prototype {
    constructor() {
        facade.log("ConcretePrototype2 class created");
    }

    Clone (){
        facade.log("ConcretePrototype2 cloned");
        return this;
    }
}