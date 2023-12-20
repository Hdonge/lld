interface TextParser {
    setNextHandler(nextHandler: TextParser): void;
    parse(text: string): void;
}

class SyntaxChecker implements TextParser {
    private nextHandler: TextParser | null = null;

    setNextHandler(nextHandler: TextParser): void {
        this.nextHandler = nextHandler;
    }

    parse(text: string): void {
        console.log('Checking Syntax...... ' + text);

        if(this.nextHandler !== null) {
            this.nextHandler.parse(text);
        }
    }
}

class SemanticsAnalyser implements TextParser {
    private nextHandler: TextParser | null = null;

    setNextHandler(nextHandler: TextParser): void {
        this.nextHandler = nextHandler;
    }

    parse(text: string): void {
        console.log('Analysing semantics......'+ text);

        if(this.nextHandler!== null) {
            this.nextHandler.parse(text);
        }
    }
}

class Formatter implements TextParser {
    private nextHandler: TextParser | null = null;

    setNextHandler(nextHandler: TextParser): void {
        this.nextHandler = nextHandler;
    }

    parse(text: string): void {
        console.log('Formatting......'+ text);

        if(this.nextHandler!== null) {
            this.nextHandler.parse(text);
        }
    }
}

////////////////////////////////////////////////////////////

const syntaxChecker = new SyntaxChecker();
const semanticsAnalyser = new SemanticsAnalyser();
const formatter = new Formatter();

syntaxChecker.setNextHandler(semanticsAnalyser);
semanticsAnalyser.setNextHandler(formatter);


syntaxChecker.parse('This is a test');
