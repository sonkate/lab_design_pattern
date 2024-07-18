// RealImage class - the actual image loader
class RealImage {
    constructor(filename) {
        this.filename = filename;
        this.imageElement = new Image();
        this.loadImage();
    }

    loadImage() {
        this.imageElement.src = this.filename;
        this.imageElement.alt = `Image loaded from ${this.filename}`;
        this.imageElement.onload = () => {
            console.log(`Image loaded: ${this.filename}`);
        };
        this.imageElement.onerror = () => {
            console.error(`Failed to load image: ${this.filename}`);
        };
    }

    displayImage(container) {
        container.appendChild(this.imageElement);
    }
}

// ImageProxy class - the proxy for lazy loading
class ImageProxy {
    constructor(filename) {
        this.filename = filename;
        this.realImage = null;
        this.placeholder = this.createPlaceholder();
    }

    createPlaceholder() {
        const placeholder = document.createElement('div');
        placeholder.textContent = 'Loading...';
        placeholder.style.width = '200px';
        placeholder.style.height = '200px';
        placeholder.style.display = 'flex';
        placeholder.style.alignItems = 'center';
        placeholder.style.justifyContent = 'center';
        placeholder.style.border = '1px solid #ccc';
        return placeholder;
    }

    displayImage(container) {
        container.appendChild(this.placeholder);
        if (this.realImage === null) {
            this.realImage = new RealImage(this.filename);
            // Simulate delay in loading the image
            setTimeout(() => {
                container.replaceChild(this.realImage.imageElement, this.placeholder);
            }, 2000); // 2 seconds delay
        }
    }
}

// Client code
function displayImages() {
    const container = document.getElementById('image-container');
    const images = [
        new ImageProxy('https://via.placeholder.com/200'),
        new ImageProxy('https://via.placeholder.com/200/0000FF'),
        new ImageProxy('https://via.placeholder.com/200/FF0000')
    ];

    images.forEach(image => image.displayImage(container));
}

window.onload = displayImages;
