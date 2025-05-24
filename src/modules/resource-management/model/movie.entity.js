export class Movie {
    constructor({
        id,
        title,
        overview,
        poster_path,
        backdrop_path,
        vote_average,
        release_date,
        genre_ids
    }) {
        this.id = id;
        this.title = title;
        this.overview = overview;
        this.poster_path = poster_path;
        this.backdrop_path = backdrop_path;
        this.vote_average = vote_average;
        this.release_date = release_date;
        this.genre_ids = genre_ids;
    }
    
    get fullPoserUrl() {
        return `https://image.tmdb.org/t/p/w500${this.poster_path}`;
    }

    get fullBackdropUrl() {
        return `https://image.tmdb.org/t/p/w500${this.backdrop_path}`;
    }
}