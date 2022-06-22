import UrlParser from "../routes/url-parser";
import routes from "../routes/routes";
import CollapseInitiator from "../../utils/burgerButton";

class App {
  constructor({ content, navbar }) {
    this._content = content;
    this._navbar = navbar;

    this._initialAppShell();
  }

  _initialAppShell() {
    CollapseInitiator.init({
      content: this.content,
      navbar: this.navbar
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
