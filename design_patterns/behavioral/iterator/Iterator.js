var Iterator = Class({
    create: function() {
        this.created = true;
    },
    First: function(){
    },
    Next: function(){
    },
    IsDone: function(){
    },
    CurrentItem: function(){
    }
});

var ConcreteIterator = Iterator.extend({});

var Aggregate = Class({
    create: function() {
        this.created = true;
    },
    CreateIterator: function(){
    }
});

var ConcreteAggregate = Aggregate.extend({
	CreateIterator: function(){
		var iterator = new ConcreteIterator(this);
    }
});