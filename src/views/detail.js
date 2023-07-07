import '../components/detail-food';
import FavoriteButtonInitiator from '../components/favorite-button';
import '../components/menus-element-tag';
import '../components/reviews-element-tag';

import { getFoodById } from '../data/foods';

import UrlParser from '../scripts/url-parser';

const Detail = {
  async render() {
    return `
      <div>
        <div id="button-favorite-container"></div>

        <detail-food></detail-food>
        <menus-element-tag></menus-element-tag>
        <reviews-element-tag></reviews-element-tag>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const food = await getFoodById(url.id);

    const detailFoodElement = document.querySelector('detail-food');
    detailFoodElement.food = food.restaurant;

    const menusElement = document.querySelector('menus-element-tag');
    menusElement.menus = food.restaurant.menus;

    const reviewsElement = document.querySelector('reviews-element-tag');
    reviewsElement.reviews = food.restaurant.customerReviews;

    FavoriteButtonInitiator.init({
      likeButtonContainer: document.querySelector('#button-favorite-container'),
      food: {
        id: food.restaurant.id,
        name: food.restaurant.name,
        pictureId: food.restaurant.pictureId,
        city: food.restaurant.city,
        rating: food.restaurant.rating,
        description: food.restaurant.description,
      },
    });
  },
};

export default Detail;
