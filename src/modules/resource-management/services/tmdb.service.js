import { Genre } from "../model/genre.entity";
import { Movie } from "../model/movie.entity";
import { Video } from '../model/video.entity.js';
import { Image } from '../model/image.entity.js';
import { Credit } from '../model/credit.entity.js';

const { default: axios } = require("axios");

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_URL = import.meta.env.VITE_TMDB_API_URL;

const http = axios.create({
    baseURL: API_URL,
    params: {
        api_key: API_KEY,
        language: 'en-US',
    }
});

export class TMDBService {
    async getPopularMovies() {
        const response = await http.get('/movie/popular');
        return response.data.results.map(movie => new Movie(movie));
    }

    async getGenres() {
        const response = await http.get('/genre/movie/list');
        return response.data.genres.map(genre => new Genre(genre));
    }

    async getMovieDetails(movieId) {
        const response = await http.get(`/movie/${movieId}`);
        return new Movie(response.data);
    }

    async getMovieVideos(movieId) {
        const response = await http.get(`/movie/${movieId}/videos`);
        return response.data.results.map(video => new Video(video));
    }

    async getMovieImages(movieId) {
        const response = await http.get(`/movie/${movieId}/images`);
        return response.data.backdrops.map(image => new Image(image));
    }

    async getMovieCredits(movieId) {
        const response = await http.get(`/movie/${movieId}/credits`);
        const cast = response.data.cast.map(c => new Credit(c));
        const crew = response.data.crew.map(c => new Credit(c));
        return { cast, crew };
    }

}
