'use strict';

class Originator {
    constructor() {
        facade.log('Originator created')
        this.state = 'a';
    }

    SetMemento (Memento){
        this.state = Memento.GetState();
    }

    CreateMemento (){
        return new Memento(this.state);
    }
}

class Memento {
    constructor(state) {
        facade.log('Memento created')
        this.state = state
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
        facade.log('Caretaker created')
        this.mementos = []
    }

    AddMemento(memento) {
        facade.log('Caretaker AddMemento')
        this.mementos.push(memento)
    }

    SetMemento() {
        return this.mementos[this.mementos.length-1]
    }
}

function init_Memento() {
    let caretaker = new Caretaker()
    let originator = new Originator()
    caretaker.AddMemento(originator.CreateMemento())
    originator.state = 'b'
    originator.SetMemento(caretaker.SetMemento())
    facade.log(originator.state)
}