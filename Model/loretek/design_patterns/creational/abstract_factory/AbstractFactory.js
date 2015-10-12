'use strict';

class AbstractFactory {
    constructor(factory) {
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
    }

    createProductA (){
        facade.log("AbstractFactory calls " + this.name + " to createProductA");
        return this.factory.createProductA();
    }

    createProductB (){
        facade.log("AbstractFactory calls " + this.name + " to createProductB");
        return this.factory.createProductB();
    }
}

class ConcreteFactory1 extends AbstractFactory {
    //singleton: true,
    constructor() {
        facade.log("ConcreteFactory1 class created");
    }

    createProductA (){        
        facade.log("ProductA created by ConcreteFactory1");
        return new AbstractProductA("ProductA1");
    }

    createProductB (){
        facade.log("ProductB created by ConcreteFactory1");
        return new AbstractProductB("ProductB1");
    }
}

class ConcreteFactory2 extends AbstractFactory {
    //singleton: true,
    constructor() {
        facade.log("ConcreteFactory2 class created");
    }

    createProductA (){
        facade.log("ProductA created by ConcreteFactory2");
        return new AbstractProductA("ProductA2");
    }

    createProductB (){
        facade.log("ProductB created by ConcreteFactory2");
        return new AbstractProductB("ProductB2");
    }
}

class AbstractProductA {
    constructor(product) {
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
}

class AbstractProductB {
    constructor(product) {
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
}


class ProductA1 extends AbstractProductA {
    constructor() {
        facade.log("ProductA1 class created");
    }
}

class ProductA2 extends AbstractProductA {
    constructor() {
        facade.log("ProductA2 class created");
    }
}

class ProductB1 extends AbstractProductB {
    constructor() {
        facade.log("ProductB1 class created");
    }
}

class ProductB2 extends AbstractProductB {
    constructor() {
        facade.log("ProductB2 class created");
    }
}