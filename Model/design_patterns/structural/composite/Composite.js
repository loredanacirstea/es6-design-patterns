'use strict';

class Component {
    constructor() {
    }

    Operation (){
    }

    Add (Component){
    }

    Remove (Component){
    }

    GetChild (key){
    }
}

class Leaf extends Component {
    constructor(name) {
        super()
        this.name = name
        facade.log('Leaf created')
    }

    Operation (){
        facade.log(this.name)
    }
}

class Composite extends Component {
    constructor(name) {
        super()
        this.name = name
        this.children = []
        facade.log('Composite created')
    }

    Operation (){
        facade.log('Composite Operation for: ' + this.name)
        for(var i in this.children)
            this.children[i].Operation()
    }

    Add (Component){
        this.children.push(Component)
    }

    Remove (Component){
        for(var i in this.children)
            if(this.children[i] === Component)
                this.children.splice(i, 1)
    }

    GetChild (key){
        return this.children[key]
    }
}

function init_Composite() {
    var composite1 = new Composite('C1')
    composite1.Add(new Leaf('L1'))
    composite1.Add(new Leaf('L2'))
    var composite2 = new Composite('C2')
    composite2.Add(composite1)
    composite1.GetChild(1).Operation()
    composite2.Operation()
}