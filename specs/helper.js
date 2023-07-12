import LikeButtonPresenter from '../src/components/button-presenter';
import FavoriteIDB from '../src/data/favorites';

const createLikeButtonPresenter = async (food) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#button-favorite-container'),
    food,
    favoriteFoods: FavoriteIDB,
  });
};

export default createLikeButtonPresenter;
