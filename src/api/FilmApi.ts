import ApiClient from './ApiClient';

export default class FilmApi extends ApiClient {
  fetchFilms() {
    return this.get(`${this.prefix}films`);
  }

  fetchFilmInfo(filmName: string | string[] | undefined) {
    return this.get(`${this.prefix}film/${filmName}`);
  }
}
