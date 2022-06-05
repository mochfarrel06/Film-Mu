import UrlParser from "../../routes/url-parser";
import TheFilmDb from "../../data/thefilm-db";
import { createMovieDetailTemplate } from "../templates/template-creator";
import BookmarkInitiator from "../../../utils/bookmark-button-initiator";

const Detail = {
  async render() {
    return `
        <section>
            <div class="container py-3">
                <div class="row" id="movie">
                </div>
            </div>
            <div id="bookmarkBtnContainer">
        </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const movie = await TheFilmDb.detailMovie(url.id);
    const movieContainer = document.querySelector("#movie");
    movieContainer.innerHTML = createMovieDetailTemplate(movie);

    BookmarkInitiator.init({
      bookmarkBtnContainer: document.querySelector("#bookmarkBtnContainer"),
      movie: {
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        backdrop_path: movie.backdrop_path,
        vote_average: movie.vote_average,
      },
    });
  },
};

export default Detail;
