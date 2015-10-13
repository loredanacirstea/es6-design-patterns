

class Component {
    constructor() {
        this.created = true;
    }

    Operation (){
    }
}

class ConcreteComponent extends Component {
    Operation (){
    }
}

class Decorator extends Component {
    Operation (){
    }
}

class ConcreteDecoratorA extends Decorator {
    constructor() {
        this.addedState = '';
    }

    Operation (){
    }
}

class ConcreteDecoratorB extends Decorator {
    Operation (){
    }

    AddedBehavior  (){
    }
}

function init_Decorator() {
    facade.log("Not yet implemented");
}