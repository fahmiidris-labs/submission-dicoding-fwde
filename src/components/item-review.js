class ItemReview extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set review(review) {
    this._review = review;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        .card {
          border: 1px solid #000000;
          padding: 24px 24px 24px 24px;
          border-radius: 12px
        }

        .card-header {}

        .card-header > h2 {
          font-size: 24px;
          margin-top: 12px;
        }
      </style>

      <div class="card">
        <div class="card-header">
          <h2>${this._review.name}</h2>
          <p>"${this._review.review}"</p>
        </div>

        <p>${this._review.date}</p>
      </div>
    `;
  }
}

customElements.define('item-review', ItemReview);
