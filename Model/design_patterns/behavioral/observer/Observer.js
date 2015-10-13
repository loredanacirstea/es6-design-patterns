

class Subject {
    constructor() {
        this.created = true;
        this.observers = [];
    }

    Attach (Observer){
        this.observers.push(Observer);
    }

    Dettach (Observer){

    }

    Notify (){
        for(var o in this.observers){
            observers[o].Update();
        }
    }
}

class ConcreteSubject extends Subject {
    constructor() {
        this.subjectState = '';
    }

    get state() {
        return this.subjectState;
    }

    set state(state) {
        this.subjectState = state;
    }
}

class Observer {
    constructor() {
        this.created = true;
    }

    Update (){
    }
}

class ConcreteObserver extends Observer {
    constructor() {
        this.created = true;
        this.observerState = '';
    }

    Update (Subject){
        this.observerState = Subject.GetState();
    }
}