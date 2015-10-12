var Context = Class({
    create: function(state){
        this.created = true;
        this.state = state;
    },
    Request: function(){
        this.state.Handle();
    }
});

var State = Class({
    create: function(){
        this.created = true;
    },
    Handle: function(){
    }
});

var ConcreteStateA = State.extend({
    create: function(){
        this.created = true;
    },
    Handle: function(){
    }
});

var ConcreteStateB = State.extend({
    create: function(){
        this.created = true;
    },
    Handle: function(){
    }
});