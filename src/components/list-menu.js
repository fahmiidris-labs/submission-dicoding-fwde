import './item-menu';

class ListMenu extends HTMLElement {
  set menus(menus) {
    this._menus = menus;
    this.render();
  }

  render() {
    this.innerHTML = '';

    this._menus.menu.forEach((menu) => {
      const menuItemElement = document.createElement('item-menu');
      menuItemElement.menu = menu;

      this.appendChild(menuItemElement);
    });
  }
}

customElements.define('list-menu', ListMenu);
