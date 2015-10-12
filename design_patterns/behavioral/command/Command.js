var Invoker = Class({
    create: function() {
        this.created = true;
    }
});

var Command = Class({
    create: function() {
        this.created = true;
    },
    Execute: function(){
    return '';
    }
});

var Receiver = Class({
    create: function() {
        this.created = true;
    },
    Action: function(){
    return '';
    }
});

var ConcreteCommand = Command.extend({
create: function(state) {
        this.created = true;
        this.state = state;
    },
Execute: function(receiver){
    receiver.Action();
    }
});