export class Credit {
    constructor({
        id,
        name,
        character,
        job,
        profile_path
    }) {
        this.id = id;
        this.name = name;
        this.character = character;
        this.job = job;
        this.profile_path = profile_path;
    }

    get profileUrl() {
        return this.profile_path ? `https://image.tmdb.org/t/p/w185${this.profile_path}` : '';
    }
}