import API_ENDPOINT from "../api-config/api-endpoint";

class TheFilmDb {
  static async nowPlayingMovies() {
    const response = await fetch(API_ENDPOINT.NOW_PLAYING);
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async upComingMovies() {
    const response = await fetch(API_ENDPOINT.UP_COMING);
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async popularMovies() {
    const response = await fetch(API_ENDPOINT.POPULAR);
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async detailMovie(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default TheFilmDb;
