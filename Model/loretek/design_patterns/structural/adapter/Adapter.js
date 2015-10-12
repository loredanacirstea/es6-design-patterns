'use strict';

class Target {
    constructor() {
        this.created = true;
    }

    Request (){
    }
}


class Adaptee {
    constructor() {
        this.created = true;
    }

    SpecificRequest (param){
        return result;
    }
}

class Adapter {
    Request (param){
        Adaptee.prototype.SpecificRequest(param);
    }
}//).mixin(Target, Adaptee);