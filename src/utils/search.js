import CONFIG from "../scripts/api-config/config";

$("#searchBtn").on("click", function () {
  $("#movies").html("");
  $.ajax({
    url: "https://api.themoviedb.org/3/search/movie?",
    type: "get",
    dataType: "json",
    data: {
      api_key: "1a2ddab7df4b247c0a70ce8ad1de0db9",
      query: $("#searchInput").val(),
    },
    success: function (res) {
      const movies = res.results;

      $.each(movies, function (i, data) {
        $("#movies").append(
          `
    <div class="col-sm-6 col-md-4 mb-3">
        <div class="card shadow">
            <img class="img-thumbnail" alt="${data.title}" src="${data.backdrop_path ? CONFIG.BASE_IMAGE_URL + data.backdrop_path : "https://picsum.photos/id/666/800/450?grayscale"}" />
            <div class="card-body">
                <h5 class="card-title text-center pb-2"><a class="text-decoration-none" href="${`/#/detail/${data.id}`}">${data.title}</a></h5>
                <span class="text-bg-secondary">Rating: ⭐️${data.vote_average}</span>
                <p class="card-text text-justify">${data.overview}</p>
            </div>
        </div>
    </div>
  `
        );
      });
      $("#searchInput").val("");
      console.log(movies);
    },
  });
});
