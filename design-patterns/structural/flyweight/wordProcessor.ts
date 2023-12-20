interface ILetter {
    display(row: number, col: number): void;
}

class DocumentLetter implements ILetter {
    constructor(
        private letter: string,
        private fontType: string,
        private fontSize: number
    ) { }

    display(row: number, col: any): void {
        console.log(`${this.letter} of fontType ${this.fontType} & fontSize ${this.fontSize} is placed at ${row} and ${col}`);
    }
}

class LetterFactory {
    private static letterCache: Map<string, ILetter> = new Map<string, ILetter>();

    public static createLetter(letter: string) {
        if (this.letterCache.has(letter)) {
            return this.letterCache.get(letter);
        } else {
            const letterObject: DocumentLetter = new DocumentLetter(letter, "Arial", 10);
            this.letterCache.set(letter, letterObject);
            return letterObject;
        }
    }
}

////////////////////////////////////////////////////////////////
const object1: ILetter = LetterFactory.createLetter('t');
object1.display(1, 2);

const object2: ILetter = LetterFactory.createLetter('t');
object2.display(2, 3);
