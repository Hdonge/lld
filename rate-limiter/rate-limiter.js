var SlidingWindow = /** @class */ (function () {
    function SlidingWindow(bucketCap, time) {
        this.bucketCap = bucketCap;
        this.time = time;
        this.slidingWindow = [];
    }
    SlidingWindow.prototype.grantAccess = function () {
        var currentTime = Date.now();
        this.updateQueue(currentTime);
        if (this.slidingWindow.length < this.bucketCap) {
            this.slidingWindow.push(currentTime);
            return true;
        }
        return false;
    };
    SlidingWindow.prototype.updateQueue = function (currentTime) {
        if (this.slidingWindow.length === 0)
            return;
        var time = (currentTime - this.slidingWindow[0]) / 1000;
        while (time > this.time && this.slidingWindow.length > 0) {
            this.slidingWindow.shift();
            time = (currentTime - this.slidingWindow[0]) / 1000;
        }
    };
    return SlidingWindow;
}());
var UserSlidingWindow = /** @class */ (function () {
    function UserSlidingWindow(id) {
        this.bucket = new Map();
        this.bucket.set(id, new SlidingWindow(10, 1));
    }
    UserSlidingWindow.prototype.accessApplication = function (id) {
        var _a;
        if ((_a = this.bucket.get(id)) === null || _a === void 0 ? void 0 : _a.grantAccess()) {
            console.log("Able to access");
        }
        else {
            console.log("To many requests");
        }
    };
    return UserSlidingWindow;
}());
var LeakyBucket = /** @class */ (function () {
    function LeakyBucket() {
    }
    LeakyBucket.prototype.grantAccess = function () {
        throw new Error("Method not implemented.");
    };
    return LeakyBucket;
}());
////////////////////////////////////////////////////////////////////////
var userBucket = new UserSlidingWindow(1);
for (var i = 0; i < 12; i++) {
    userBucket.accessApplication(1);
}
