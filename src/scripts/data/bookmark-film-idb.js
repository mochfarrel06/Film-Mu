import { openDB } from "idb";
import CONFIG from "../api-config/config";

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: "id" });
  },
});

const BookMarkFilmIdb = {
  async getFilm(id) {
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllFilm() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putFilm(movie) {
    return (await dbPromise).put(OBJECT_STORE_NAME, movie);
  },
  async deleteFilm(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
};

export default BookMarkFilmIdb;
