
const AboutUs = {
  async render() {
    return `
    <section class="kind" id="kind">
      <div class="container py-3">
          <div class="row">
              <div class="col-md-12 text-center mb-5">
                <div class="about-title mt-5">
                    <h2 class="fw-bold">About Us</h2>
                </div>
              </div>
              <div class="mb-3">
              <div class="about-title mt-5 text-center">
                    <h2 class="fw-normal">About FILM-MU</h2>
                </div>
            <div class="card shadow">
                <div class="card-body">
                  <h5 class="card-title text-center pb-2">FIlM-MU</h5>
                  <p class="card-text text-center mt-">FILM-MU adalah sebuah website yang ditujukan untuk mencari dan menemukan sebuah film yang sedang tayang</p>
                </div>
            </div>
            </div>
            <div class="about-title mt-5 text-center">
                    <h2 class="fw-normal">About Tim</h2>
                </div>
            <div class="col-sm-6 col-md-3 mb-3">
            <div class="card shadow">
              <img class="img-thumbnail" alt="" src="../Logo-FILM-MU.png" />
                <div class="card-body">
                  <h5 class="card-title text-center pb-2">"Nama"</h5>
                  <p class="card-text text-justify mt-">"Terserah": "Hallo"</p>
                  <p class="card-text text-justify">"Terserah": "Hallo"</p>
                  <p class="card-text text-justify">"Terserah": "Hallo"</p>
                </div>
            </div>
            </div>
            <div class="col-sm-6 col-md-3 mb-3">
            <div class="card shadow">
              <img class="img-thumbnail" alt="" src="../Logo-FILM-MU.png" />
                <div class="card-body">
                  <h5 class="card-title text-center pb-2">"Nama"</h5>
                  <p class="card-text text-justify mt-">"Terserah": "Hallo"</p>
                  <p class="card-text text-justify">"Terserah": "Hallo"</p>
                  <p class="card-text text-justify">"Terserah": "Hallo"</p>
                </div>
            </div>
            </div>
            <div class="col-sm-6 col-md-3 mb-3">
            <div class="card shadow">
              <img class="img-thumbnail" alt="" src="../Logo-FILM-MU.png" />
                <div class="card-body">
                  <h5 class="card-title text-center pb-2">"Nama"</h5>
                  <p class="card-text text-justify mt-">"Terserah": "Hallo"</p>
                  <p class="card-text text-justify">"Terserah": "Hallo"</p>
                  <p class="card-text text-justify">"Terserah": "Hallo"</p>
                </div>
            </div>
            </div>
            <div class="col-sm-6 col-md-3 mb-3">
            <div class="card shadow">
              <img class="img-thumbnail" alt="" src="../Logo-FILM-MU.png" />
                <div class="card-body">
                  <h5 class="card-title text-center pb-2">"Nama"</h5>
                  <p class="card-text text-justify mt-">"Terserah": "Hallo"</p>
                  <p class="card-text text-justify">"Terserah": "Hallo"</p>
                  <p class="card-text text-justify">"Terserah": "Hallo"</p>
                </div>
            </div>
            </div>
        </div>
      </div>
    </section>
    
  `;
  },

  async afterRender(){}
};

export default AboutUs;