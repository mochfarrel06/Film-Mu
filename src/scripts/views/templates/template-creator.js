import CONFIG from '../../api-config/config';

const createMovieDetailTemplate = (movie) => `
    <div class="col-md-6">
      <div class="card">
        <img class="movie__poster" src="${CONFIG.BASE_IMAGE_URL + movie.poster_path}" alt="${movie.title}" />
      </div>
    </div>
    <div class="col-md-6">
      <h3>Information</h3>
      <h4>Tagline</h4>
      <p>${movie.tagline}</p>
      <h4>Release Date</h4>
      <p>${movie.release_date}</p>
      <h4>Duration</h4>
      <p>${movie.runtime} minutes</p>
      <h4>Rating</h4>
      <p>${movie.vote_average}</p>
      <h3>Overview</h3>
      <p>${movie.overview}</p>
    </div>
`;

const createMovieItemTemplate = (movie) => `
    <div class="col-sm-6 col-md-4 mb-3">
        <div class="card">
            <img class="img-thumbnail" alt="${movie.title}" src="${movie.backdrop_path ? CONFIG.BASE_IMAGE_URL + movie.backdrop_path : 'https://picsum.photos/id/666/800/450?grayscale'}" />
            <div class="card-body">
                <h5 class="card-title text-center pb-2"><a href="${`/#/detail/${movie.id}`}">${movie.title}</a></h5>
                <p class="card-text">${movie.overview}</p>
                <p>⭐️${movie.vote_average}</p>
            </div>
        </div>
    </div>
  `;

export { createMovieItemTemplate, createMovieDetailTemplate };