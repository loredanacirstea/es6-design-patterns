

class Subject {
    constructor() {
        this.created = true;
    }

    Request (){
    }
}

class RealSubject extends Subject {
    Request (){
        return '';
    }
}

class Proxy extends Subject {
    Request (){
        var realSubject = new RealSubject();
        realSubject.Request();
    }
}

function init_Proxy() {
    facade.log("Not yet implemented");
}