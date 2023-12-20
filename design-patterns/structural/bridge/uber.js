var GoogleMaps = /** @class */ (function () {
    function GoogleMaps() {
    }
    GoogleMaps.prototype.navigate = function (destination) {
        console.log("Google Map: Navigating to ".concat(destination));
    };
    return GoogleMaps;
}());
var AppleMaps = /** @class */ (function () {
    function AppleMaps() {
    }
    AppleMaps.prototype.navigate = function (destination) {
        console.log("Apple Map: Navigating to ".concat(destination));
    };
    return AppleMaps;
}());
var UberRide = /** @class */ (function () {
    function UberRide(navigationImpl) {
        this.navigationImpl = navigationImpl;
    }
    UberRide.prototype.navigate = function (destination) {
        this.navigationImpl.navigate(destination);
    };
    return UberRide;
}());
var UberEats = /** @class */ (function () {
    function UberEats(navigationImpl) {
        this.navigationImpl = navigationImpl;
    }
    UberEats.prototype.navigate = function (destination) {
        this.navigationImpl.navigate(destination);
    };
    return UberEats;
}());
////////////////////////////////////////////////////////////////
var os = 'apple';
if (os.toLowerCase() === 'apple') {
    var uberEats = new UberEats(new AppleMaps());
    uberEats.navigate('New York');
    var uberRide = new UberRide(new AppleMaps());
    uberRide.navigate('New York');
}
else {
    var uberEats = new UberEats(new GoogleMaps());
    uberEats.navigate('New York');
    var uberRide = new UberRide(new GoogleMaps());
    uberRide.navigate('New York');
}
