var Context = Class({
    create: function(ConcreteStrategy){
        this.created = true;
        this.strategy = ConcreteStrategy;
    },
    ContextInterface: function(){
    }
});

var Strategy = Class({
    create: function(){
        this.created = true;
    },
    AlgorithmInterface: function(){
    }
});

var ConcreteStrategyA = Class({
    AlgorithmInterface: function(){
    }
});

var ConcreteStrategyB = Class({
    AlgorithmInterface: function(){
    }
});