/**
 * Requirement
 *  - It should be able check if too many requests are coming
 *  - Should be able grant or reject access for further process
 *  - Should be able to implement different strategies/techniques for rate limiting based on choice
 * 
 * Entities
 *  - Rate limiter 
 *  - UserWindow
 */


interface RateLimiter {
    grantAccess(): boolean;
}

class SlidingWindow implements RateLimiter {
    private slidingWindow: Array<number> = [];
    constructor(private bucketCap: number, private time: number,) { }

    grantAccess(): boolean {
        const currentTime = Date.now();
        this.updateQueue(currentTime);

        if (this.slidingWindow.length < this.bucketCap) {
            this.slidingWindow.push(currentTime);
            return true;
        }
        return false;
    }

    private updateQueue(currentTime: number): void {
        if (this.slidingWindow.length === 0) return;

        let time = (currentTime - this.slidingWindow[0]) / 1000;
        while (time > this.time && this.slidingWindow.length > 0) {
            this.slidingWindow.shift();
            time = (currentTime - this.slidingWindow[0]) / 1000;
        }
    }
}

class LeakyBucket implements RateLimiter {
    grantAccess(): boolean {
        throw new Error("Method not implemented.");
    }
}


interface UserWindow {
    accessAplication(requestUrl: string): boolean;
}

class UserSlidingWindow implements UserWindow {
    private requestBucketMap: Map<string, SlidingWindow> = new Map();
    constructor(requestUrl: string) {
        this.requestBucketMap.set(requestUrl, new SlidingWindow(10, 1));
    }

    accessApplication(requestUrl: string): boolean {
        if (this.bucket.get(requestUrl)?.grantAccess()) {
            console.log("Able to access");
            return true;
        } else {
            console.log("To many requests");
            return false;
        }
    }
}

class UserLeakyBucket implements UserWindow{
    accessAplication(requestUrl: string): boolean {
        return false;
    }
}

////////////////////////////////////////////////////////////////////////

const userBucket: UserSlidingWindow = new UserSlidingWindow(1);
for (let i = 0; i < 12; i++) {
    userBucket.accessApplication('http://foobar.com/products');
}
