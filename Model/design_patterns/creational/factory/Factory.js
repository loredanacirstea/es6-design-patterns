'use strict';

class Productt {
    constructor() {
    }
}

class ConcreteProduct extends Productt {
    constructor() {
        super()
        facade.log('ConcreteProduct created')
    }
}

class Creator {
    constructor() {
    }

    FactoryMethod (){

    }

    AnOperation (){
        facade.log("AnOperation()")
        this.product = this.FactoryMethod()
        facade.log(this.product instanceof ConcreteProduct)
    }
}

class ConcreteCreator extends Creator {

    constructor() {
        super()
        facade.log('ConcreteCreator created')
    }

    FactoryMethod (){
        return new ConcreteProduct();
    }
}

function init_FactoryMethod() {
    var factory = new ConcreteCreator()
    factory.AnOperation()
}