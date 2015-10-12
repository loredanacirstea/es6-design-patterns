'use strict';

class AbstractClass {
    constructor() {
        this.created = true;
    }

    TemplateMethod (){
        PrimitiveOperation1();
        PrimitiveOperation2();
    }

    PrimitiveOperation1 (){
    }

    PrimitiveOperation2 (){
    }  
}

class ConcreteClass extends AbstractClass {
    constructor() {
        this.created = true;
    }

    PrimitiveOperation1 (){
    }

    PrimitiveOperation2 (){
    }  
}