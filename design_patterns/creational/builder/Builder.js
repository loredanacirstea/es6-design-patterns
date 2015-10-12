var Director = Class({
    create: function() {
        this.structure = ['Maze','Wall','Door'];
        facade.log("Director class created");
    },
    Construct: function(concreteBuilder){
        builder = new Builder(concreteBuilder);
        facade.log("New " + concreteBuilder + " created");
        for(var all in this.structure){
            builder.BuildPart(this.structure[all]);
        }
    }
});

var Builder = Class({
    create: function(concreteBuilder) {
        facade.log("Builder class created");
        switch(concreteBuilder){
            case "ConcreteBuilder1":
                this.builder = new ConcreteBuilder1();
                break;
            case "ConcreteBuilder2":
                this.builder = new ConcreteBuilder2();
                break;
        }
    },
    BuildPart: function(part){
        this.builder.BuildPart(part);
    }
});

var ConcreteBuilder1 = Builder.extend({
    create: function() {
        facade.log("ConcreteBuilder1 class created");
        this.parts = [];
    },
    BuildPart: function(part){
        this.parts[part] = part + " constructed";
    },
    get:{
        GetResult: function(){
            return this.parts;
        }

    }
});

var Product = new Class({
    created: function(){
        facade.log("Product class created");
    }
});