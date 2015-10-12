

class Context {
    constructor(ConcreteStrategy){
        this.created = true;
        this.strategy = ConcreteStrategy;
    }

    ContextInterface (){
    }
}

class Strategy {
    constructor() {
        this.created = true;
    }

    AlgorithmInterface (){
    }
}

class ConcreteStrategyA {
    AlgorithmInterface (){
    }
}

class ConcreteStrategyB {
    AlgorithmInterface (){
    }
}