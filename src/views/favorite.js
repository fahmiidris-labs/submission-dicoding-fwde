import '../components/list-food';

import FavoriteIDB from '../data/favorites';

const Favorite = {
  async render() {
    return `
      <div>
        <div>
          <h2 class="title">My Favorite Restaurants</h2>
          <list-food></list-food>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const foods = await FavoriteIDB.getFoods();

    const listFoodElement = document.querySelector('list-food');
    listFoodElement.foods = { restaurants: foods };
  },
};

export default Favorite;
