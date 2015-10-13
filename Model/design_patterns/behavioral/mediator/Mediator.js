'use strict';

class Mediator {
    constructor() {
        this.created = true;
    }
}

class Colleague {
    constructor() {
        this.created = true;
        this.mediator = new Mediator();
    }
}

class ConcreteColleague1 extends Colleague {}
class ConcreteColleague2 extends Colleague {}

class ConcreteMediator extends Mediator {}