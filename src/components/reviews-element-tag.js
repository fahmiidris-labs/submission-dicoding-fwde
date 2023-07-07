import "./list-review";

class ReviewMenuTag extends HTMLElement {
  set reviews(reviews) {
    this._reviews = [...reviews, ...reviews, ...reviews];
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
        .reviews {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 2em;
        }
      </style>

      <div>     
        <h3>Reviews</h3> 
        <list-review class="reviews"></list-review>
      </div>
    `;
    
    const reviewElement = document.querySelector('list-review');
    reviewElement.reviews = this._reviews;
  }
}

customElements.define('reviews-element-tag', ReviewMenuTag);
