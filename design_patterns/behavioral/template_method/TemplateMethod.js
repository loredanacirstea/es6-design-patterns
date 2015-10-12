var AbstractClass = Class({
    create: function(){
        this.created = true;
    },
    TemplateMethod: function(){
        PrimitiveOperation1();
        PrimitiveOperation2();
    },
    PrimitiveOperation1: function(){
    },
    PrimitiveOperation2: function(){
    }  
});

var ConcreteClass = AbstractClass.extend({
    create: function(){
        this.created = true;
    },
    PrimitiveOperation1: function(){
    },
    PrimitiveOperation2: function(){
    }  
});