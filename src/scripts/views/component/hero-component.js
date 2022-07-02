class HeroComponent extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
      <div class="jumbotron jumbotron-fluid bg-cover text-light text-center bg-image">
        <div class="mask jubotron text-jumbotron" style="background-color: rgba(0, 0, 0, 0.8)"> 
        <h1 class="display-5 text-jumbotron">Hello, Everyone!!</h1>
        <p class="lead fs-4">Selamat Datang di Film-Mu, dimana kamu bisa melihat daftar film - film terbaru, populer dan sedang tayang di bioskop.</p>
      </div>
      </div>
     `;
  }
}

customElements.define("hero-component", HeroComponent);
