import './list-menu';

class MenusElementTag extends HTMLElement {
  set menus(menus) {
    this._menus = menus;
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
        .menus {
          display: flex;
        }

        .menus > div {
          width: 50%;
        }
      </style>

      <div class="menus">
        <div>     
          <h3>Food menus</h3> 
          <list-menu class="foods"></list-menu>
        </div>

        <div>
          <h3>Drink menus</h3>
          <list-menu class="drinks"></list-menu>
        </div>
      </div>
    `;

    const menuFoods = document.querySelector('list-menu.foods');
    const menuDrinks = document.querySelector('list-menu.drinks');

    const menusArray = Object.keys(this._menus).map((key) => {
      const menu = {
        name: key,
        menu: this._menus[key],
      };
      return menu;
    });

    Object.keys(this._menus).forEach((key, menu) => {
      if (key === 'foods') {
        menuFoods.menus = menusArray[menu];
      } else {
        menuDrinks.menus = menusArray[menu];
      }
    });
  }
}

customElements.define('menus-element-tag', MenusElementTag);
