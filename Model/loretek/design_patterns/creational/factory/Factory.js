

class Product {
    constructor() {
        this.created = true;
    }
}

class ConcreteProduct extends Product {
    constructor() {
        this.created = true;
    }
}

class Creator {
    create () {
        this.created = true;
    }

    FactoryMethod (){

    }

    AnOperation (){

    }
}

class ConcreteCreator extends Creator {
    constructor() {
        this.created = true;
    }

    FactoryMethod (){
        this.product = new ConcreteProduct();
    }
}