require(['Model/loretek/design_patterns/creational/singleton/Singleton.js']);

var Facade = Class({
    create: function() {
        this.log("Facade class created");
        this.htmlid = null;
    },
    log: function(text){
        if(typeof this.htmlid === null){
            console.log(text);
        }
        else{
            $('#'+this.htmlid).append(text+'</br>');
        }
    },
    erase: function(){
        $("#"+this.htmlid).html('');
    },
    test_dp: function(dp){
        switch(dp){
            case "Facade":
                this.htmlid = "test_Facade";
                this.erase();
                this.log("Facade is already created");
                break;
            case "AbstractFactory": 
                this.htmlid = "test_AbstractFactory";
                this.erase();
                var factory1 = new AbstractFactory("ConcreteFactory1");
                var productB1 = factory1.createProductB();
                break;
            case "Builder":
                this.htmlid = "test_Builder";
                var dpclass = new Builder();
                this.erase();
                this.log("Not yet implemented");
                break;
            case "Factory":
                this.htmlid = "test_Factory";
                this.erase();
                this.log("Not yet implemented");
                break;
            case "Prototype":
                this.htmlid = "test_Prototype";
                this.erase();
                var proto1 = new Prototype("ConcretePrototype1");
                var clone1 = proto1.Clone();
                var proto2 = new Prototype("ConcretePrototype2");
                var clone2 = proto2.Clone();
                break;
            case "Singleton":
                this.htmlid = "test_Singleton";
                this.erase();
                var singleton1 = Singleton.instance("data");
                var singleton2 = Singleton.instance("data");
                facade.log(singleton1 == singleton2);
                break;
            case "Adapter":
                this.htmlid = "test_Adapter";
                var dpclass = new Adapter();
                this.erase();
                this.log("Not yet implemented");
                break;
            case "Bridge":
                this.htmlid = "test_Bridge";
                this.erase();
                this.log("Not yet implemented");
                break;
            case "Composite":
                this.htmlid = "test_Composite";
                var dpclass = new Composite();
                this.erase();
                this.log("Not yet implemented");
                break;
            case "Decorator":
                this.htmlid = "test_Decorator";
                var dpclass = new Decorator();
                this.erase();
                this.log("Not yet implemented");
                break;
            case "Flyweight":
                this.htmlid = "test_Flyweight";
                var dpclass = new Flyweight();
                this.erase();
                this.log("Not yet implemented");
                break;
            case "Proxy":
                this.htmlid = "test_Proxy";
                var dpclass = new Proxy();
                this.erase();
                this.log("Not yet implemented");
                break;
            case "ChainofResponsibility":
                this.htmlid = "test_ChainofResponsibility";
                this.erase();
                this.log("Not yet implemented");
                break;

            case "Command":
                this.htmlid = "test_Command";
                var dpclass = new Command();
                this.erase();
                this.log("Not yet implemented");
                break;
            case "Interpreter":
                this.htmlid = "test_Interpreter";
                this.erase();
                this.log("Not yet implemented");
                break;
            case "Iterator":
                this.htmlid = "test_Iterator";
                var dpclass = new Iterator();
                this.erase();
                this.log("Not yet implemented");
                break;
            case "Mediator":
                this.htmlid = "test_Mediator";
                var dpclass = new Mediator();
                this.erase();
                this.log("Not yet implemented");
                break;
            case "Memento":
                this.htmlid = "test_Memento";
                var dpclass = new Memento();
                this.erase();
                this.log("Not yet implemented");
                break;
            case "Observer":
                this.htmlid = "test_Observer";
                var dpclass = new Observer();
                this.erase();
                this.log("Not yet implemented");
                break;
            case "State":
                this.htmlid = "test_State";
                var dpclass = new State();
                this.erase();
                this.log("Not yet implemented");
                break;
            case "Strategy":
                this.htmlid = "test_Strategy";
                var dpclass = new Strategy();
                this.erase();
                this.log("Not yet implemented");
                break;
            case "TemplateMethod":
                this.htmlid = "test_TemplateMethod";
                this.erase();
                this.log("Not yet implemented");
                break;
            case "Visitor":
                this.htmlid = "test_Visitor";
                this.erase();
                var visitor1 = new ConcreteVisitor1();
                var visitor2 = new ConcreteVisitor2();
                var element = new ConcreteElementA();
                element.Accept(visitor1);
                element.Accept(visitor2);
                break;
            default:
                console.log("nothing to test");
        }
    }
});