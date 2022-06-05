import NowPlaying from "../views/pages/now-playing";
import Detail from "../views/pages/detail";
import Bookmark from "../views/pages/bookmark";

const routes = {
  "/": NowPlaying, // default page
  "/now-playing": NowPlaying,
  "/detail/:id": Detail,
  "/bookmark": Bookmark,
};

export default routes;
