var Subject = Class({
    create: function() {
        this.created = true;
        this.observers = [];
    },
    Attach: function(Observer){
        this.observers.push(Observer);
    },
    Dettach: function(Observer){

    },
    Notify: function(){
        for(var o in this.observers){
            observers[o].Update();
        }
    }
});

var ConcreteSubject = Subject.extend({
    create: function(){
        this.subjectState = '';
    },
    get:{
        GetState: function(){
            return this.subjectState;
        }
    },
    set:{
        setState: function(state){
            this.subjectState = state;
        }
    }
});

var Observer = Class({
    create: function(){
        this.created = true;
    },
    Update: function(){
    }
});

var ConcreteObserver = Observer.extend({
    create: function(){
        this.created = true;
        this.observerState = '';
    },
    Update: function(Subject){
        this.observerState = Subject.GetState();
    }
});