class Cache {
    constructor(private storage: Storage, private evictionPolicy: EvictionPolicy) { }

    put(key: string, value: string) {
        this.storage.add(key, value);
        this.evictionPolicy.keyAccessed(key);
    }

    get(key: string): string | undefined {
        this.evictionPolicy.keyAccessed(key);
        return this.storage.get(key);

    }
}

class Storage {
    private storageMap: Map<string, string> = new Map<string, string>();

    constructor(private capacity: number) { }

    add(key: string, value: string) {
        if (this.capacity === this.storageMap.size) {
            console.log("Storage capacity is full");
        } else {
            this.storageMap.set(key, value);
        }
    }

    remove(key: string): void {
        this.storageMap.delete(key);
    }

    get(key: string): string | undefined {
        return this.storageMap.get(key);
    }
}

class EvictionPolicy {
    constructor(private dll: Array<string>, private mapper: Map<string, Array<string>>) { }

    keyAccessed(key: string): void {
        // dettachNode(this.mapper.get(key));
        // addNodeAtEnd(this.mapper.get(key));
        // return;
    }

    evictKey() { }
}