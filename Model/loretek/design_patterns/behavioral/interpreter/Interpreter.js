

class Context {
    constructor() {
        this.created = true;
    }
}

class AbstractExpression {
    constructor() {
        this.created = true;
    }

    Interpret (Context){
    }
}

class TerminalExpression extends AbstractExpression {
	Interpret (Context){
    }
}

class NonterminalExpression extends AbstractExpression {
	Interpret (Context){
    }
}