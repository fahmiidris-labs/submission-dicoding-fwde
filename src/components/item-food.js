import { BASE_URL_IMAGE } from '../config/api';

class ItemFood extends HTMLElement {
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
        .card {}

        .card-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 6px;
        }

        .card-body {}

        .card-body > p {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;  
          overflow: hidden;
        }

        .card-body > p {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;  
          overflow: hidden;
        }

        .card-body > a {
          color: #1e293b;
        }
      </style>

      <div class="card">
        <img class="card-image" src="${BASE_URL_IMAGE + this._food.pictureId}" alt="Baner Restaurant ${this._food.name}" />

        <div class="card-body">
          <h2>${this._food.name}</h2>
          <div>Rating ${this._food.rating}</div>

          <p>
            ${this._food.description}
          </p>

          <a href="#/detail/${this._food.id}">
            View Detail
          </a>
        </div>
      </div>
    `;
  }
}

customElements.define('item-food', ItemFood);
