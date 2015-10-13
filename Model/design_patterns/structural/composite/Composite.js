'use strict';

class Component {
    constructor() {
        this.created = true;
    }

    Operation (){
    }

    Add (Component){
    }

    Remove (Component){
    }

    GetChild (child){
    }
}

class Leaf extends Component {
    Operation (){
    }
}

class Composite extends Component {
    Operation (){
    }

    Add (Component){
    }

    Remove (Component){
    }

    GetChild (child){
    }
}

function init_Composite() {
    facade.log("Not yet implemented");
}