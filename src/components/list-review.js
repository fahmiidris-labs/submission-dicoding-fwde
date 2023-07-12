import './item-review';

class ListReview extends HTMLElement {
  set reviews(reviews) {
    this._reviews = reviews;
    this.render();
  }

  render() {
    this.innerHTML = '';

    this._reviews.forEach((review) => {
      const reviewItemElement = document.createElement('item-review');
      reviewItemElement.review = review;

      this.appendChild(reviewItemElement);
    });
  }
}

customElements.define('list-review', ListReview);
