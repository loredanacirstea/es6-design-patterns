'use strict';

class Subjectt {
    constructor() {
    }

    Attach (Observer){
        this.observers.push(Observer);
        facade.log('Observer attached')
    }

    Dettach (Observer){
        for(var i in this.observers)
            if(this.observers[i] === Observer)
                this.observers.splice(i, 1)
    }

    Notify (){
        facade.log('Subject Notify')
        for(var i in this.observers){
            this.observers[i].Update(this);
        }
    }
}

class ConcreteSubject extends Subjectt {
    constructor() {
        super()
        this.subjectState = null
        this.observers = []
        facade.log('ConcreteSubject created')
    }

    GetState() {
        return this.subjectState;
    }

    SetState(state) {
        this.subjectState = state;
        this.Notify()
    }
}

class Observer {
    constructor() {
    }

    Update (){
    }
}

class ConcreteObserver extends Observer {
    constructor() {
        super()
        this.observerState = '';
        facade.log('ConcreteObserver created')
    }

    Update (Subject){
        this.observerState = Subject.GetState();
        facade.log('Observer new state: ' + this.observerState)
    }
}

function init_Observer() {
    var observer1 = new ConcreteObserver()
    var observer2 = new ConcreteObserver()
    var subject = new ConcreteSubject()
    subject.Attach(observer1)
    subject.Attach(observer2)
    subject.SetState('state 1')
}