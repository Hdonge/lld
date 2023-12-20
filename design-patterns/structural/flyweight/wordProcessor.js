var DocumentLetter = /** @class */ (function () {
    function DocumentLetter(letter, fontType, fontSize) {
        this.letter = letter;
        this.fontType = fontType;
        this.fontSize = fontSize;
    }
    DocumentLetter.prototype.display = function (row, col) {
        console.log("".concat(this.letter, " of fontType ").concat(this.fontType, " & fontSize ").concat(this.fontSize, " is placed at ").concat(row, " and ").concat(col));
    };
    return DocumentLetter;
}());
var LetterFactory = /** @class */ (function () {
    function LetterFactory() {
    }
    LetterFactory.createLetter = function (letter) {
        if (this.letterCache.has(letter)) {
            return this.letterCache.get(letter);
        }
        else {
            var letterObject = new DocumentLetter(letter, "Arial", 10);
            this.letterCache.set(letter, letterObject);
            return letterObject;
        }
    };
    LetterFactory.letterCache = new Map();
    return LetterFactory;
}());
////////////////////////////////////////////////////////////////
var object1 = LetterFactory.createLetter('t');
object1.display(1, 2);
var object2 = LetterFactory.createLetter('t');
object2.display(2, 3);
