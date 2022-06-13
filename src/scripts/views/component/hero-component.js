class HeroComponent extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
              <div class="jumbotron container-fluid bg-warning text-light text-center">
                
              </div>
          `;
  }
}

customElements.define("hero-component", HeroComponent);
