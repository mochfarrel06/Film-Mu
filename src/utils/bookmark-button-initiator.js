import BookMarkFilmIdb from "../scripts/data/bookmark-film-idb";
import { createBookmarkButtonTemplate, createBookmarkedButtonTemplate } from "../scripts/views/templates/template-creator";

const BookmarkInitiator = {
  async init({ bookmarkBtnContainer, movie }) {
    this._bookmarkBtnContainer = bookmarkBtnContainer;
    this._movie = movie;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._movie;

    if (await this._isMovieExist(id)) {
      this._renderBookmarked();
    } else {
      this._renderBookmark();
    }
  },

  async _isMovieExist(id) {
    const film = await BookMarkFilmIdb.getFilm(id);
    return !!film;
  },

  _renderBookmark() {
    this._bookmarkBtnContainer.innerHTML = createBookmarkButtonTemplate();

    const bookmarkBtn = document.querySelector("#bookmarkButton");
    bookmarkBtn.addEventListener("click", async () => {
      await BookMarkFilmIdb.putFilm(this._movie);

      swal({
        title: "Berhasil ditambahkan!",
        text: "Movie berhasil ditambahkan ke Bookmark",
        icon: "success",
        button: true,
      });

      this._renderButton();
    });
  },

  _renderBookmarked() {
    this._bookmarkBtnContainer.innerHTML = createBookmarkedButtonTemplate();

    const bookmarkBtn = document.querySelector("#bookmarkButton");
    bookmarkBtn.addEventListener("click", async () => {
      await BookMarkFilmIdb.deleteFilm(this._movie.id);

      swal({
        title: "Berhasil Dihapus!",
        text: "Movie berhasil dihapus dari Bookmark",
        icon: "error",
        button: true,
      });

      this._renderButton();
    });
  },
};

export default BookmarkInitiator;
