import "regenerator-runtime";
import "../src/styles/style.css";
import "../src/styles/dark-mode.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "../src/utils/dark-mode";
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
