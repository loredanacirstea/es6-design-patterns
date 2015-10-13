'use strict';

class Target {
    constructor(type) {
        let result

        switch(type) {
            case 'adapter':
                result = new Adapter()
                break
            default:
                result = null
        }
        return result
    }

    Request() {
    }
}


class Adaptee {
    constructor() {
        facade.log('Adaptee created')
    }

    SpecificRequest () {
        facade.log('Adaptee request')
    }
}


class Adapter extends Adaptee {

    constructor() {
        super()
        facade.log('Adapter created')
    }

    Request (){
        return this.SpecificRequest()
    }
}


function init_Adapter() {
    var f = new Target("adapter")
    f.Request()
}