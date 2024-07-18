// RealImage class - the actual image loader
class RealImage {
    constructor(filename) {
        this.filename = filename;
        this.loadImage();
    }

    loadImage() {
        console.log(`Loading image from ${this.filename}`);
        // Simulate a delay in loading the image
        this.image = `Image data of ${this.filename}`;
    }

    displayImage() {
        console.log(`Displaying ${this.filename}`);
    }
}

// ImageProxy class - the proxy for lazy loading
class ImageProxy {
    constructor(filename) {
        this.filename = filename;
        this.realImage = null;
    }

    displayImage() {
        if (this.realImage === null) {
            this.realImage = new RealImage(this.filename);
        }
        this.realImage.displayImage();
    }
}

// Client code
function clientCode(image) {
    image.displayImage();
}

console.log("Client: Displaying image through proxy:");
const proxyImage = new ImageProxy("example.jpg");
clientCode(proxyImage); // First time access, image will be loaded

console.log("");

console.log("Client: Displaying image again:");
clientCode(proxyImage); // Subsequent access, image will be displayed immediately
