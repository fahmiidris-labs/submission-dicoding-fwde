import '../components/list-food';

import { getFoods } from '../data/foods';

const List = {
  async render() {
    return `
      <div>
        <div class="banner-container">
          <img
            src="./images/heros/hero-image_2.jpg"
            alt="Banner"
            class="banner"
          />
        </div>

        <div>
          <h2 class="title">Explore Restaurant</h2>
          <list-food></list-food>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const foods = await getFoods();

    const listFoodElement = document.querySelector('list-food');
    listFoodElement.foods = foods;
  },
};

export default List;
