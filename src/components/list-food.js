import './item-food';

class ListFood extends HTMLElement {
  set foods(foods) {
    this._foods = foods.restaurants;
    this.render();
  }

  render() {
    this.innerHTML = '';

    this._foods.forEach((food) => {
      const foodItemElement = document.createElement('item-food');
      foodItemElement.food = food;

      this.appendChild(foodItemElement);
    });
  }
}

customElements.define('list-food', ListFood);
