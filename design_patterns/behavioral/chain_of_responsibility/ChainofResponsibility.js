var Handler = Class({
    create: function() {
        this.created = true;
    },
    HandleRequest: function(){
    }
});

var ConcreteHandler1 = Handler.extend({
    HandleRequest: function(){

    }
});

var ConcreteHandler2 = Handler.extend({
    HandleRequest: function(){
    
    }
});