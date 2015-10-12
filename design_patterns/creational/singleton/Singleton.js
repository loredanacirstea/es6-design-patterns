var Singleton = Class({
    singleton: true,
    create: function(SingletonData){
        this.SingletonData = SingletonData;
        facade.log("Singleton class created");
    },
    SingletonOperation: function() {
        return 'a';
    },
    get:{
        GetSingletonData: function(){
            return SingletonData;
        }
    }
});