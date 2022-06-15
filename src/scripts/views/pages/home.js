import "../component/hero-component";
import TheFilmDb from "../../data/thefilm-db";
import { createMovieItemTemplate } from "../templates/template-creator";

const Home = {
  async render() {
    return `
            <hero-component></hero-component>
            <section class="kind" id="kind">
                <div class="container py-3">
                    <div class="row">
                        <div class="col-md-12 text-center mb-5">
                        <div class="about-title mt-5">
                            <h2 class="fw-bold" id="text">Now Playing</h2>
                        </div>
                        </div>
                    </div>
                    <div class="row" id="movies">
                    
                    </div>
                </div>
            </section>
    `;
  },

  async afterRender() {
    
    const movies = await TheFilmDb.nowPlayingMovies();
    const moviesContainer = document.querySelector("#movies");
    movies.forEach((movie) => {
      moviesContainer.innerHTML += createMovieItemTemplate(movie);
    });
  },
};

export default Home;
