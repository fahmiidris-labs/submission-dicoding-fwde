import './item-food.js';
import DATA from '../DATA.json';

class ListFood extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set foods(foods) {
    this._foods = foods.restaurants;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = '';

    this._foods.forEach((food) => {
      const foodItemElement = document.createElement('item-food');
      foodItemElement.food = food;

      this.shadowDOM.appendChild(foodItemElement);
    });
  }
}

customElements.define('list-food', ListFood, );
