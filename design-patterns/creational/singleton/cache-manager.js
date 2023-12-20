var CacheManager = /** @class */ (function () {
    function CacheManager() {
        this.cache = {};
        this.cache = {};
    }
    CacheManager.getInstance = function () {
        if (!CacheManager.cacheInstance)
            CacheManager.cacheInstance = new CacheManager();
        return CacheManager.cacheInstance;
    };
    CacheManager.prototype.get = function (key) {
        return this.cache[key];
    };
    CacheManager.prototype.set = function (key, value) {
        this.cache[key] = value;
    };
    CacheManager.prototype.clear = function () {
        this.cache = {};
    };
    return CacheManager;
}());
////////////////////////////////////////////////////////////////
var cacheInstance1 = CacheManager.getInstance();
var cacheInstance2 = CacheManager.getInstance();
console.log(cacheInstance1 === cacheInstance2);
cacheInstance1.set("key1", "value1");
cacheInstance2.set("key2", "value2");
console.log(cacheInstance1.get("key1"));
console.log(cacheInstance2.get("key2"));
cacheInstance2.clear();
console.log(cacheInstance1.get("key1"));
