'use strict';

class Iterator {
    constructor() {
        this.created = true;
    }

    First (){
    }

    Next (){
    }

    IsDone (){
    }

    CurrentItem (){
    }
}

class ConcreteIterator extends Iterator {}

class Aggregate {
    constructor() {
        this.created = true;
    }

    CreateIterator (){
    }
}

class ConcreteAggregate extends Aggregate {
	CreateIterator (){
		var iterator = new ConcreteIterator(this);
    }
}