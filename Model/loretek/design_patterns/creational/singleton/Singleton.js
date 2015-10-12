'use strict';

class Singleton {
    constructor (SingletonData) {
        this.SingletonData = SingletonData
        facade.log("Singleton class created")
    }

    SingletonOperation () {
        return 'a';
    }

    GetSingletonData () {
        return SingletonData;
    }
}
