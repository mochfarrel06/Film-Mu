import "regenerator-runtime";
import "bootstrap/dist/js/bootstrap.bundle";
import "@popperjs/core";
import "../src/styles/style.css";
import "../src/styles/dark-mode.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/utils/dark-mode";
import "../src/utils/search";
import "../src/utils/burgerButton";
import App from "../src/scripts/views/app";

const app = new App({
  content: document.querySelector("#mainContent"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
});
