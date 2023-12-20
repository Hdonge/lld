
interface CacheData {
    [key: string]: any;
}

class CacheManager {
    private static cacheInstance: CacheManager;
    private cache: CacheData = {};

    private constructor() { 
        this.cache = {};
    }

    public static getInstance(): CacheManager {
        if(!CacheManager.cacheInstance) CacheManager.cacheInstance = new CacheManager();
        return CacheManager.cacheInstance;
    }

    public get(key: string): any {
        return this.cache[key];
    }

    public set(key: string, value: any): void {
        this.cache[key] = value;
    }

    public clear(): void {
        this.cache = {};
    }
}


////////////////////////////////////////////////////////////////
const cacheInstance1 = CacheManager.getInstance();
const cacheInstance2 = CacheManager.getInstance();

console.log(cacheInstance1 === cacheInstance2);

cacheInstance1.set("key1", "value1");
cacheInstance2.set("key2", "value2");

console.log(cacheInstance1.get("key1"));
console.log(cacheInstance2.get("key2"));

cacheInstance2.clear();

console.log(cacheInstance1.get("key1"));
