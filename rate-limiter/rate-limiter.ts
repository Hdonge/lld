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

class UserSlidingWindow {
    private bucket: Map<number, SlidingWindow> = new Map();
    constructor(id: number) {
        this.bucket.set(id, new SlidingWindow(10, 1));
    }

    accessApplication(id: number): void {
        if (this.bucket.get(id)?.grantAccess()) {
            console.log("Able to access");
        } else {
            console.log("To many requests");
        }
    }
}


class LeakyBucket implements RateLimiter {
    grantAccess(): boolean {
        throw new Error("Method not implemented.");
    }
}


class UserLeakyBukete {

}

////////////////////////////////////////////////////////////////////////

const userBucket: UserSlidingWindow = new UserSlidingWindow(1);
for (let i = 0; i < 12; i++) {
    userBucket.accessApplication(1);
}
