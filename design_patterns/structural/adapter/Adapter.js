var Target = Class({
    create: function() {
        this.created = true;
    },
    Request: function(){
    }
});


var Adaptee = Class({
    create: function() {
        this.created = true;
    },
    SpecificRequest: function(param){
        return result;
    }
});

var Adapter = Class({
    Request: function(param){
        Adaptee.prototype.SpecificRequest(param);
    }
}).mixin(Target, Adaptee);