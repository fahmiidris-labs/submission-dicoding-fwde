import FavoriteIDB from '../src/data/favorites';
import createLikeButtonPresenter from './helper';

const likeButtonContainer = () => {
  document.body.innerHTML = '<div id="button-favorite-container"></div>';
};

describe('like a restaurant', () => {
  beforeEach(() => {
    likeButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await createLikeButtonPresenter({
      id: '1',
    });

    expect(document.querySelector('.button-add-to-favorite')).toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await createLikeButtonPresenter({
      id: '1',
    });

    expect(document.querySelector('.button-remove-from-favorite')).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await createLikeButtonPresenter({
      id: '1',
    });

    document
      .querySelector('.button-add-to-favorite')
      .dispatchEvent(new Event('click'));
    const food = await FavoriteIDB.getFoodById('1');

    expect(food).toEqual({ id: '1' });
    FavoriteIDB.deleteFood('1');
  });

  it('should not add a restaurant again when its already liked', async () => {
    await createLikeButtonPresenter({
      id: '1',
    });

    await FavoriteIDB.putFood({
      id: '1',
    });

    document
      .querySelector('.button-add-to-favorite')
      .dispatchEvent(new Event('click'));
    FavoriteIDB.deleteFood('1');
  });

  it('should not add a restaurant again when its already liked', async () => {
    await createLikeButtonPresenter({
      id: '1',
    });

    await FavoriteIDB.putFood({
      id: '1',
    });

    document.querySelector('.button-add-to-favorite').dispatchEvent(new Event('click'));

    expect(await FavoriteIDB.getFoods()).toEqual([
      { id: '1' },
    ]);

    FavoriteIDB.deleteFood('1');
  });
});
