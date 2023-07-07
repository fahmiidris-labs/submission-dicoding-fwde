import './item-review';

class ListReview extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set reviews(reviews) {
    this._reviews = reviews;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = '';

    this._reviews.forEach((review) => {
      const reviewItemElement = document.createElement('item-review');
      reviewItemElement.review = review;

      this.shadowDOM.appendChild(reviewItemElement);
    });
  }
}

customElements.define('list-review', ListReview);
