import './menus-element-tag';

import { BASE_URL_IMAGE } from '../config/api';

class DetailFood extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set food(food) {
    this._food = food;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        .container {
          padding-top: 24px;
        }

        .banner {
          width: 100%;
          border-radius: 10px;
        }

        .menus {
          padding-top: 12px;
        }
      </style>

      <div class="container">
        <div>
          <img class="banner" src="${
            BASE_URL_IMAGE + this._food.pictureId
          }" alt="Restaurant ${this._food.name}" />

          <div>
            <h2>${this._food.name} - ${this._food.city} - ${this._food.address}</h2>

            <div>Rating ${this._food.rating}</div>

            <p>
              ${this._food.description}
            </p>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('detail-food', DetailFood);
