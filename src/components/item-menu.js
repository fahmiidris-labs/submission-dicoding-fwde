class ItemMenu extends HTMLElement {
  set menu(menu) {
    this._menu = menu;
    this.render();
  }

  render() {
    this.innerHTML = `
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
