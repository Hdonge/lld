interface Image {
    displayImage(): void;
}

class RealImage implements Image {
    constructor(private filename: string) {
        this.loadimage();
    }

    private loadimage(): void {
        console.log(`Load image ${this.filename}`);
    }

    displayImage(): void {
        console.log(`Display image ${this.filename}`);
    }
}

//Here proxy class caching image
class ProxyImage implements Image {
    private realImage: RealImage | null = null;
    constructor(private filename: string) { }

    displayImage(): void {
        if (this.realImage === null) {
            this.realImage = new RealImage(this.filename);
        }

        return this.realImage.displayImage();
    }
}


////////////////////////////////////////////////////////////////////////
const image1: Image = new ProxyImage('image1.jpg');
image1.displayImage(); //load and display image

image1.displayImage(); //already loaded , only display image
