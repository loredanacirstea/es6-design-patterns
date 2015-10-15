'use strict';

class Iterator {
    constructor() {
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

class ConcreteIterator extends Iterator {
    constructor(aggregate) {
        super()
        facade.log('ConcreteIterator created')
        this.index = 0
        this.aggregate = aggregate
    }

    First (){
        return this.aggregate.list[0]
    }

    Next (){
        this.index += 2
        return this.aggregate.list[this.index]
    }

    CurrentItem (){
        return this.aggregate.list[this.index]
    }
}

class Aggregate {
    constructor() {
    }

    CreateIterator (){
    }
}

class ConcreteAggregate extends Aggregate {
    constructor(list) {
        super()
        this.list = list
        facade.log('ConcreteAggregate created')
    }

	CreateIterator (){
		this.iterator = new ConcreteIterator(this);
    }
}

function init_Iterator() {
    var aggregate = new ConcreteAggregate([0,1,2,3,4,5,6,7])
    aggregate.CreateIterator()
    facade.log(aggregate.iterator.First())
    facade.log(aggregate.iterator.Next())
    facade.log(aggregate.iterator.CurrentItem())
}