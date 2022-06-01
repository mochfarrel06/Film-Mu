import NowPlaying from '../views/pages/now-playing';
import Detail from '../views/pages/detail';

const routes = {
  '/': NowPlaying, // default page
  '/now-playing': NowPlaying,
  '/detail/:id': Detail,
};

export default routes;