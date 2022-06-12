class HeroComponent extends HTMLElement {
  connectedCallback() {
    // eslint-disable-next-line no-underscore-dangle
    this._render();
  }

  // eslint-disable-next-line no-underscore-dangle
  _render() {
    this.innerHTML = `
              <div class="jumbotron container-fluid bg-warning text-light text-center">
                
              </div>
          `;
  }
}

customElements.define("hero-component", HeroComponent);
