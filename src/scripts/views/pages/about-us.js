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
                  <p class="card-text text-center mt-">FILM-MU adalah sebuah website yang ditujukan untuk mencari dan menemukan sebuah film yang sedang tayang, pupular maupun yang akan datang.</p>
                </div>
            </div>
            </div>
            <div class="about-title mt-5 text-center">
                    <h2 class="fw-normal">About Tim</h2>
                </div>
            <div class="col-sm-6 col-md-3 mb-3">
            <div class="card shadow">
              <img class="img-thumbnail rounded-circle" alt="" src="../about-us/adit.jpg" />
                <div class="card-body">
                  <h5 class="card-title text-center pb-2">Adithia Fahri Pahrudin</h5>
                  <p class="card-text text-justify fs-7">Universitas Singaperbangsa Karawang</p>
                  <p class="card-text text-justify">ID : F2314A298</p>
                  <div class="text-center">
                    <a href="https://twitter.com/Fahriadthia" target="_blank"><i class="bi bi-twitter fs-2"></i></a>
                    <a href="https://www.instagram.com/fahriadithia/" class="text-decoration-none" target="_blank"><i class="bi bi-instagram fs-2 ps-2"></i></a>
                    <a href="https://web.facebook.com/adithia.fahrudin/" target="_blank"><i class="bi bi-facebook fs-2 ps-2"></i></a>
                    <a href="https://www.linkedin.com/in/aditfp" target="_blank"><i class="bi bi-linkedin fs-2 ps-2"></i></a>
                  </div>
                </div>
            </div>
            </div>
            <div class="col-sm-6 col-md-3 mb-3">
            <div class="card shadow">
              <img class="img-thumbnail rounded-circle" alt="" src="../about-us/farel.jpg" />
                <div class="card-body">
                  <h5 class="card-title text-center pb-2">Moch Farrel</h5>
                  <p class="card-text text-justify">Universitas Muhammadiyah Malang</p>
                  <p class="card-text text-justify">ID : F2258A229</p>
                  <div class="text-center">
                    <a href="https://twitter.com/MochFarrel06" target="_blank"><i class="bi bi-twitter fs-2"></i></a>
                    <a href="https://www.instagram.com/mochfarrel.d/" target="_blank"><i class="bi bi-instagram fs-2 ps-2"></i></a>
                    <a href="" target="_blank"><i class="bi bi-facebook fs-2 ps-2"></i></a>
                    <a href="https://www.linkedin.com/in/moch-farrel-4ba845142/" target="_blank"><i class="bi bi-linkedin fs-2 ps-2"></i></a>
                  </div>
                </div>
            </div>
            </div>
            <div class="col-sm-6 col-md-3 mb-3">
            <div class="card shadow">
              <img class="img-thumbnail rounded-circle" alt="" src="../about-us/fariz.jpg" />
                <div class="card-body">
                  <h5 class="card-title text-center pb-2">Muhammad Fariz Dzuhreza</h5>
                  <p class="card-text text-justify">Universitas Mikroskil</p>
                  <p class="card-text text-justify">ID : F2172A135</p>
                  <div class="text-center">
                    <a href="https://twitter.com/mfaridz_dz" target="_blank"><i class="bi bi-twitter fs-2"></i></a>
                    <a href="https://www.instagram.com/mfariz_dz/" target="_blank"><i class="bi bi-instagram fs-2 ps-2"></i></a>
                    <a href="https://web.facebook.com/muhammad.faridzdzuhreza/" target="_blank"><i class="bi bi-facebook fs-2 ps-2"></i></a>
                    <a href="https://www.linkedin.com/in/mfariz-dzuhreza-329579203/" target="_blank"><i class="bi bi-linkedin fs-2 ps-2"></i></a>
                  </div>
                </div>
            </div>
            </div>
            <div class="col-sm-6 col-md-3 mb-3">
            <div class="card shadow">
              <img class="img-thumbnail rounded-circle" alt="" src="../about-us/tasya.jpg" />
                <div class="card-body">
                  <h5 class="card-title text-center pb-2">Natasya Hayu Pangestika</h5>
                  <p class="card-text text-justify">Universitas Kristen Immanuel Yogyakarta</p>
                  <p class="card-text text-justify">ID : F7240A194</p>
                  <div class="text-center">
                    <a href="https://twitter.com/N_Tasya17" target="_blank"><i class="bi bi-twitter fs-2"></i></a>
                    <a href="https://www.instagram.com/n_hoshi0605/" target="_blank"><i class="bi bi-instagram fs-2 ps-2"></i></a>
                    <a href="https://www.facebook.com/profile.php?id=100009223540754" target="_blank"><i class="bi bi-facebook fs-2 ps-2"></i></a>
                    <a href="https://www.linkedin.com/in/natasya-hayu-pangestika-6a8744151" target="_blank"><i class="bi bi-linkedin fs-2 ps-2"></i></a>
                  </div>
                </div>
            </div>
            </div>
        </div>
      </div>
    </section>
    
  `;
  },

  async afterRender() {},
};

export default AboutUs;
