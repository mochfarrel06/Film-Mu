import UrlParser from '../../routes/url-parser';
import TheFilmDb from '../../data/thefilm-db';
import { createMovieDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
        <section>
            <div class="container py-3">
                <div class="row" id="movie">
                    
                </div>
            </div>
        </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const movie = await TheFilmDb.detailMovie(url.id);
    const movieContainer = document.querySelector('#movie');
    movieContainer.innerHTML = createMovieDetailTemplate(movie);
  },
};

export default Detail;