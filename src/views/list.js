import '../components/list-food';

import { getFoods } from '../data/foods';

const List = {
  async render() {
    return `
      <div>
        <div class="banner-container">
          <picture>
            <source media="(max-width: 425px)" srcset="./images/hero-image_2-small.jpg">
            <source media="(max-width: 768px)" srcset="./images/hero-image_2-large.jpg">
            
            <img
              class="banner lazyload"
              data-src="./images/hero-image_2-large.jpg"
              alt="Banner"
              class="banner"
            />
          </picture>
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
