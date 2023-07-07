import './item-menu';

class ListMenu extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set menus(menus) {
    this._menus = menus;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = '';

    this._menus.menu.forEach((menu) => {
      const menuItemElement = document.createElement('item-menu');
      menuItemElement.menu = menu;

      this.shadowDOM.appendChild(menuItemElement);
    });
  }
}

customElements.define('list-menu', ListMenu);
