

class Director {
    constructor() {
        this.structure = ['Maze','Wall','Door'];
        facade.log("Director class created");
    }

    Construct (concreteBuilder){
        builder = new Builder(concreteBuilder);
        facade.log("New " + concreteBuilder + " created");
        for(var all in this.structure){
            builder.BuildPart(this.structure[all]);
        }
    }
}

class Builder {
    constructor(concreteBuilder) {
        facade.log("Builder class created");
        switch(concreteBuilder){
            case "ConcreteBuilder1":
                this.builder = new ConcreteBuilder1();
                break;
            case "ConcreteBuilder2":
                this.builder = new ConcreteBuilder2();
                break;
        }
    }

    BuildPart (part){
        this.builder.BuildPart(part);
    }
}

class ConcreteBuilder1 extends Builder {
    constructor() {
        facade.log("ConcreteBuilder1 class created");
        this.parts = [];
    }

    BuildPart (part){
        this.parts[part] = part + " constructed";
    }

    get result (){
        return this.parts;
    }
}

class Product {
    constructor() {
        facade.log("Product class created");
    }
}