class ItemMenu extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set menu(menu) {
    this._menu = menu;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        .item-menu {
          color: #000000;
          text-decoration: none;
          display: inline;
        }
      </style>

      <div class="item-menu">
        <h4>${this._menu.name}</h4>
      </div>
    `;
  }
}

customElements.define('item-menu', ItemMenu);
