'use strict';

let _singleton = null

class Singleton {
    constructor (data) {
        if(!_singleton) {
            this.data = data
            _singleton = this
        }
        else
            return _singleton
        facade.log("Singleton class created")
    }

    SingletonOperation () {
        facade.log('SingletonOperation')
    }

    GetSingletonData () {
        return this.data
    }
}

function init_Singleton() {
    var singleton1 = new Singleton("data1")
    var singleton2 = new Singleton("data2")
    facade.log(singleton1.GetSingletonData())
    facade.log(singleton2.GetSingletonData())
    facade.log(singleton1 instanceof Singleton)
    facade.log(singleton2 instanceof Singleton)
    facade.log(singleton1 === singleton2)
}