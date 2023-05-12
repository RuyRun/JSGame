export class DrawObjects {
    img;
    imgCache = {};
    

    draw(ctx) {
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    };

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let image = new Image();
            image.src = path;
            this.imgCache[path] = image;
        });
    }

}