var Mediator = Class({
    create: function() {
        this.created = true;
    }
});

var Colleague = Class({
    create: function() {
        this.created = true;
        this.mediator = new Mediator();
    }
});

var ConcreteColleague1 = Colleague.extend({});
var ConcreteColleague2 = Colleague.extend({});

var ConcreteMediator = Mediator.extend({
});