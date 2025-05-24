export class Image {
    constructor({
        file_path,
        width,
        height,
    }) {
        this.file_path = file_path;
        this.width = width;
        this.height = height;
    }

    get fullUrl() {
        return `https://image.tmdb.org/t/p/original${this.file_path}`;
    }

    get previewUrl() {
        return `https://image.tmdb.org/t/p/w300${this.file_path}`;
    }
}