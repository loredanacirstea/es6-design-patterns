'use strict';

class Originator {
    constructor() {
        facade.log('Originator created')
        this.state = 'a';
        facade.log('State= ' + this.state)
    }

    SetMemento (Memento){
        this.state = Memento.GetState()
        facade.log('State= ' + this.state)
    }

    CreateMemento (state){
        return new Memento(state);
    }
}

class Memento {
    constructor(state) {
        this.state = state
        facade.log('Memento created. State= ' + this.state)
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
    caretaker.AddMemento(originator.CreateMemento('b'))
    originator.SetMemento(caretaker.SetMemento())
    facade.log(originator.state)
}