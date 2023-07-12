const assert = require('assert');

Feature('Add Favorite Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('like one restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.scrollTo('list-food');
  I.wait(1);

  I.seeElement('item-food a');

  const firstRestaurant = locate('item-food a').first();
});
