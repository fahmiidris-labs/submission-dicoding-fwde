import List from '../views/list';
import Detail from '../views/detail';
import Favorite from '../views/favorite';

const routes = {
  '/': List,
  '/list': List,
  '/detail/:id': Detail,
  '/favorites': Favorite,
};

export default routes;
