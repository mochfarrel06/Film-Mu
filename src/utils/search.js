import CONFIG from "../scripts/api-config/config";

function searchMovie() {
  $("#movies").html("");
  $("#text").html("");
  $.ajax({
    url: `${CONFIG.SEARCH_URL}`,
    type: "get",
    dataType: "json",
    data: {
      api_key: `${CONFIG.KEY}`,
      query: $("#searchInput").val(),
    },
    success: function (res) {
      
      if (res.results) {
          let movies = res.results;
          $("#movies").append(`
            <div class="row">
              <div class="col-md-12 text-center mb-5">
                <div class="about-title">
                    <h2 class="fw-bold mt-0" id="text">Your Search</h2>
                </div>
              </div>
            </div>
          `)
          $.each(movies, function (i, data) {
            $("#movies").append(`
                  <div class="col-sm-6 col-md-4 mb-3">
                      <div class="card shadow">
                      <a class="text-decoration-none" href="${`/#/detail/${data.id}`}">
                          <img class="img-thumbnail" alt="${data.title}" src="${data.backdrop_path ? CONFIG.BASE_IMAGE_URL + data.backdrop_path : "https://picsum.photos/id/666/800/450?grayscale"}" />
                          </a>
                          <div class="card-body">
                              <h5 class="card-title text-center pb-2"><a class="text-decoration-none" href="${`/#/detail/${data.id}`}">${data.title}</a></h5>
                              <span class="text-bg-secondary">Rating: ⭐️${data.vote_average}</span>
                              <p class="card-text text-justify">${data.overview}</p>
                          </div>
                      </div>
                  </div>
                `);
            });

            $("#searchInput").val("");

          } else {
            $("#movies").html(`
                <div class="about-title">
                  <h2 class="fw-bold">Now Playing</h2>
                </div>
            `)
        }
      }
  });
}

$("#searchBtn").on("click", function (e) {
  e.preventDefault();
  searchMovie();
});

$("#searchInput").on("keyup", function (e) {
  if (e.keycode === 13){
    searchMovie();
  }
})
