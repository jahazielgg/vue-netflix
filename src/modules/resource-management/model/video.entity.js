export class Video {
    constructor({
        id, 
        key,
        name,
        site, 
        type
    }) {
        this.id = id;
        this.key = key;
        this.name = name;
        this.site = site;
        this.type = type;
    }

    get isYoutube() {
        return this.site === 'YouTube';
    }

    get embedUrl() {
        return this.isYouTube
        ? `https://www.youtube.com/embed/${this.key}`
        : '';
    }
}