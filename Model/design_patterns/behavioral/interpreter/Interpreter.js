'use strict';

class Context {
    constructor(input) {
        this.input = input
        this.index = 0
        this.output = null
    }

    Lookup(expr) {
        //return this.
    }
}

class AbstractExpression {
    constructor() {
    }

    Interpret (context){
    }
}

class TerminalExpression extends AbstractExpression {
    constructor(name) {
        super()
        this.name = name
        facade.log('TerminalExpression created')
    }

	Interpret (context){
    }
}

class NonterminalExpression extends AbstractExpression {
    constructor() {
        super()
        this.name = '+'
        facade.log('NonterminalExpression created')
    }

	Interpret (context){

        return terminal1.Interpret() + terminal2
    }
}

function init_Interpreter() {
    //var context = new Context('A+B+A')
    facade.log('Not implemented')
}