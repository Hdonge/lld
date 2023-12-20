var SyntaxChecker = /** @class */ (function () {
    function SyntaxChecker() {
        this.nextHandler = null;
    }
    SyntaxChecker.prototype.setNextHandler = function (nextHandler) {
        this.nextHandler = nextHandler;
    };
    SyntaxChecker.prototype.parse = function (text) {
        console.log('Checking Syntax...... ' + text);
        if (this.nextHandler !== null) {
            this.nextHandler.parse(text);
        }
    };
    return SyntaxChecker;
}());
var SemanticsAnalyser = /** @class */ (function () {
    function SemanticsAnalyser() {
        this.nextHandler = null;
    }
    SemanticsAnalyser.prototype.setNextHandler = function (nextHandler) {
        this.nextHandler = nextHandler;
    };
    SemanticsAnalyser.prototype.parse = function (text) {
        console.log('Analysing semantics......' + text);
        if (this.nextHandler !== null) {
            this.nextHandler.parse(text);
        }
    };
    return SemanticsAnalyser;
}());
var Formatter = /** @class */ (function () {
    function Formatter() {
        this.nextHandler = null;
    }
    Formatter.prototype.setNextHandler = function (nextHandler) {
        this.nextHandler = nextHandler;
    };
    Formatter.prototype.parse = function (text) {
        console.log('Formatting......' + text);
        if (this.nextHandler !== null) {
            this.nextHandler.parse(text);
        }
    };
    return Formatter;
}());
////////////////////////////////////////////////////////////
var syntaxChecker = new SyntaxChecker();
var semanticsAnalyser = new SemanticsAnalyser();
var formatter = new Formatter();
syntaxChecker.setNextHandler(semanticsAnalyser);
semanticsAnalyser.setNextHandler(formatter);
syntaxChecker.parse('This is a test');
