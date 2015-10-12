var Component = Class({
    create: function() {
        this.created = true;
    },
    Operation: function(){
    },
    Add: function(Component){
    },
    Remove: function(Component){
    },
    GetChild: function(child){
    }
});

var Leaf = Component.extend({
    Operation: function(){
    }
});

var Composite = Component.extend({
    Operation: function(){
    },
    Add: function(Component){
    },
    Remove: function(Component){
    },
    GetChild: function(child){
    }
});