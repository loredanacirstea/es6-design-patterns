'use strict';

class Facade {
    constructor () {
        this.log("Facade class created");
        this.htmlid = null;
    }

    log (text) {
        if(typeof this.htmlid === null){
            console.log(text);
        }
        else{
            $('#'+this.htmlid).append(text+'</br>');
        }
    }

    erase () {
        $("#"+this.htmlid).html('');
    }

    test_dp (dp) {
        switch(dp){
            case "Facade":
                this.htmlid = "test_Facade"
                this.erase()
                this.log("Facade is already created")
                break
            case "AbstractFactory": 
                this.htmlid = "test_AbstractFactory"
                this.erase()
                init_AbstractFactory()
                break
            case "Builder":
                this.htmlid = "test_Builder"
                this.erase()
                init_Builder()
                break;
            case "Factory":
                this.htmlid = "test_Factory"
                this.erase()
                init_FactoryMethod()
                break
            case "Prototype":
                this.htmlid = "test_Prototype"
                this.erase()
                init_Prototype()
                break
            case "Singleton":
                this.htmlid = "test_Singleton"
                this.erase()
                init_Singleton()
                break
            case "Adapter":
                this.htmlid = "test_Adapter"
                this.erase()
                init_Adapter()
                break
            case "Bridge":
                this.htmlid = "test_Bridge"
                this.erase()
                init_Bridge()
                break
            case "Composite":
                this.htmlid = "test_Composite"
                this.erase()
                init_Composite()
                break
            case "Decorator":
                this.htmlid = "test_Decorator"
                this.erase()
                init_Decorator()
                break
            case "Flyweight":
                this.htmlid = "test_Flyweight"
                this.erase()
                init_Flyweight()
                break
            case "Proxy":
                this.htmlid = "test_Proxy"
                this.erase()
                init_Proxy()
                break
            case "ChainofResponsibility":
                this.htmlid = "test_ChainofResponsibility"
                this.erase()
                init_ChainofResponsibility()
                break
            case "Command":
                this.htmlid = "test_Command"
                this.erase()
                init_Command()
                break
            case "Interpreter":
                this.htmlid = "test_Interpreter"
                this.erase()
                init_Interpreter()
                break
            case "Iterator":
                this.htmlid = "test_Iterator"
                this.erase()
                init_Iterator()
                break
            case "Mediator":
                this.htmlid = "test_Mediator"
                this.erase()
                init_Mediator()
                break
            case "Memento":
                this.htmlid = "test_Memento"
                this.erase()
                init_Memento()
                break
            case "Observer":
                this.htmlid = "test_Observer"
                this.erase()
                init_Observer()
                break
            case "State":
                this.htmlid = "test_State"
                this.erase()
                init_State()
                break
            case "Strategy":
                this.htmlid = "test_Strategy"
                this.erase()
                init_Strategy()
                break
            case "TemplateMethod":
                this.htmlid = "test_TemplateMethod"
                this.erase()
                init_TemplateMethod()
                break
            case "Visitor":
                this.htmlid = "test_Visitor";
                this.erase();
                init_Visitor()
                break;
            default:
                console.log("nothing to test");
        }
    }
}
