const Search = {
    async render() {
      return `
            <section class="kind" id="kind">
                <div class="container py-3">
                <div class="row">
                    <div class="col-md-12 text-center mb-5">
                            <div class="about-title mt-5">
                                <h2 class="fw-bold" id="text">Your Search</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row" id="movies">
                      
                    </div>
                </div>
            </section>
         `;
    },
  
    async afterRender() {}
};
  
export default Search;