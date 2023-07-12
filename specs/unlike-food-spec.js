import FavoriteIDB from '../src/data/favorites';
import createLikeButtonPresenter from './helper';

const likeButtonContainer = () => {
  document.body.innerHTML = '<div id="button-favorite-container"></div>';
};

describe('unlike a restaurant', () => {
  beforeEach(async () => {
    likeButtonContainer();
    await FavoriteIDB.putFood({
      id: '1',
    });
  });

  afterEach(async () => {
    await FavoriteIDB.deleteFood('1');
  });

  it('should display unlike widget when the restaurant has been liked', async () => {
    await createLikeButtonPresenter({
      id: '1',
    });

    expect(document.querySelector('.button-remove-from-favorite')).toBeTruthy();
  });

  it('should not display like widget when the restaurant has been liked', async () => {
    await createLikeButtonPresenter({
      id: '1',
    });

    expect(document.querySelector('.button-add-to-favorite')).toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await createLikeButtonPresenter({
      id: '1',
    });

    document
      .querySelector('.button-remove-from-favorite')
      .dispatchEvent(new Event('click'));

    expect(await FavoriteIDB.getFoods()).toEqual([]);
  });
});
