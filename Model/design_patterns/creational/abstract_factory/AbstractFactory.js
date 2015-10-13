'use strict';

class AbstractFactory {
    constructor() {
    }

    createProductA (product) {
    }

    createProductB (product) {
    }
}

class ConcreteFactory1 extends AbstractFactory {
    constructor() {
        super()
        facade.log("ConcreteFactory1 class created");
    }

    createProductA (product) {
        facade.log('ConcreteFactory1 createProductA')
        return new ProductA1()
    }

    createProductB (product) {
        facade.log('ConcreteFactory1 createProductB')
        return new ProductB1()
    }
}

class ConcreteFactory2 extends AbstractFactory {
    constructor() {
        super()
        facade.log("ConcreteFactory2 class created");
    }

    createProductA (product) {
        facade.log('ConcreteFactory2 createProductA')
        return new ProductA2()
    }

    createProductB (product) {
        facade.log('ConcreteFactory2 createProductB')
        return new ProductB2()
    }
}

class AbstractProductA {
    constructor() {
    }
}

class AbstractProductB {
    constructor() {
    }
}


class ProductA1 extends AbstractProductA {
    constructor() {
        super()
        facade.log('ProductA1 created')
    }
}

class ProductA2 extends AbstractProductA {
    constructor() {
        super()
        facade.log('ProductA2 created')
    }
}

class ProductB1 extends AbstractProductB {
    constructor() {
        super()
        facade.log('ProductB1 created')
    }
}

class ProductB2 extends AbstractProductB {
    constructor() {
        super()
        facade.log('ProductB2 created')
    }
}

function init_AbstractFactory() {
    var factory1 = new ConcreteFactory1()
    var productB1 = factory1.createProductB()
    
    var factory2 = new ConcreteFactory2()
    var productA2 = factory2.createProductA()
}