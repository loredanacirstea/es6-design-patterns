'use strict';

class Subject {
    constructor() {
    }

    Request (){
    }
}

class RealSubject extends Subject {
    constructor() {
        super()
        facade.log('RealSubject created')
    }

    Request (){
        facade.log('RealSubject handles request')
    }
}

class Proxy extends Subject {
    constructor() {
        super()
        facade.log('Proxy created')
    }

    Request (){
        this.realSubject = new RealSubject();
        this.realSubject.Request();
    }
}

function init_Proxy() {
    var proxy = new Proxy()
    proxy.Request()
}