var Subject = Class({
    create: function() {
        this.created = true;
    },
    Request: function(){
    }
});

var RealSubject = Subject.extend({
    Request: function(){
        return '';
    }
});

var Proxy = Subject.extend({
    Request: function(){
        var realSubject = new RealSubject();
        realSubject.Request();
    }
});