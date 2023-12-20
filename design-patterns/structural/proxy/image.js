var RealImage = /** @class */ (function () {
    function RealImage(filename) {
        this.filename = filename;
        this.loadimage();
    }
    RealImage.prototype.loadimage = function () {
        console.log("Load image ".concat(this.filename));
    };
    RealImage.prototype.displayImage = function () {
        console.log("Display image ".concat(this.filename));
    };
    return RealImage;
}());
//Here proxy class caching image
var ProxyImage = /** @class */ (function () {
    function ProxyImage(filename) {
        this.filename = filename;
        this.realImage = null;
    }
    ProxyImage.prototype.displayImage = function () {
        if (this.realImage === null) {
            this.realImage = new RealImage(this.filename);
        }
        return this.realImage.displayImage();
    };
    return ProxyImage;
}());
////////////////////////////////////////////////////////////////////////
var image1 = new ProxyImage('image1.jpg');
image1.displayImage(); //load and display image
image1.displayImage(); //already loaded , only display image
