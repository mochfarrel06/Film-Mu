class HeroComponent extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
              <div class="jumbotron jumbotron-fluid bg-cover text-light text-center">
                  <h1 class="display-4 text-jumbotron">Hello, world!</h1>
                  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
              </div>
          `;
  }
}

customElements.define("hero-component", HeroComponent);
