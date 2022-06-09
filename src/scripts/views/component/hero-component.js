class HeroComponent extends HTMLElement {
  connectedCallback() {
    // eslint-disable-next-line no-underscore-dangle
    this._render();
  }

  // eslint-disable-next-line no-underscore-dangle
  _render() {
    this.innerHTML = `
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src="../jumbotron-1.jpg" class="d-block w-100 img-responsive" alt="jumbotron" style="width: 100%">
                        </div>
                    </div>
                </div>
          `;
  }
}

customElements.define("hero-component", HeroComponent);
