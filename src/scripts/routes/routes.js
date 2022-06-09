import NowPlaying from "../views/pages/now-playing";
import Detail from "../views/pages/detail";
import Bookmark from "../views/pages/bookmark";
import UpComing from "../views/pages/upcoming";
import Popular from "../views/pages/popular";

const routes = {
  "/": NowPlaying, // default page
  "/now-playing": NowPlaying,
  "/upcoming": UpComing,
  "/detail/:id": Detail,
  "/popular": Popular,
  "/bookmark": Bookmark,
};

export default routes;
