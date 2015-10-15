'use strict';

class AbstractClass {
    constructor() {
    }

    TemplateMethod (){
        this.PrimitiveOperation1();
        this.PrimitiveOperation2();
    }

    PrimitiveOperation1 (){
    }

    PrimitiveOperation2 (){
    }  
}

class ConcreteClass extends AbstractClass {
    constructor() {
        super()
        facade.log("ConcreteClass created")
    }

    PrimitiveOperation1 (){
        facade.log('ConcreteClass PrimitiveOperation1')
    }

    PrimitiveOperation2 (){
        facade.log('ConcreteClass PrimitiveOperation2')
    }  
}

function init_TemplateMethod() {
    let class1 = new ConcreteClass()
    class1.TemplateMethod()
}  