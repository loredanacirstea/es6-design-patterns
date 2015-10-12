'use strict';

class Originator {
    constructor() {
        this.created = true;
        this.state = '';
    }

    SetMemento (Memento){
        this.state = Memento.GetState();
    }

    CreateMemento (){
        return new Memento(this.state);
    }
}

class Memento {
    constructor() {
        this.created = true;
        this.state = '';
    }

    GetState (){
        return this.state;
    }

    SetState (state){
        this.state = state;
    }
}

class Caretaker {
    constructor() {
        this.created = true;
    }
}