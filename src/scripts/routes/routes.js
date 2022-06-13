import Home from "../views/pages/home";
import NowPlaying from "../views/pages/now-playing";
import Detail from "../views/pages/detail";
import Bookmark from "../views/pages/bookmark";
import UpComing from "../views/pages/upcoming";
import Popular from "../views/pages/popular";
import AboutUs from "../views/pages/about-us";

const routes = {
  "/": Home, // default page
  "/home": Home,
  "/aboutus": AboutUs,
  "/now-playing": NowPlaying,
  "/upcoming": UpComing,
  "/detail/:id": Detail,
  "/popular": Popular,
  "/bookmark": Bookmark,
};

export default routes;
