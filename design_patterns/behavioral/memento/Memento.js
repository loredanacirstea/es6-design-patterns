var Originator = Class({
    create: function() {
        this.created = true;
        this.state = '';
    },
    set:{
        SetMemento: function(Memento){
            this.state = Memento.GetState();
        }
    },
    CreateMemento: function(){
        return new Memento(this.state);
    }
});

var Memento = Class({
    create: function() {
        this.created = true;
        this.state = '';
    },
    get:{
        GetState: function(){
            return this.state;
        }
    },
    set:{
        SetState: function(state){
            this.state = state;
        }
    }
});

var Caretaker = Class({
    create: function() {
        this.created = true;
    }
});