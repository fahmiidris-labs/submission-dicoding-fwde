const assert = require('assert');

Feature('Unlike Favorite Food');

Before(({ I }) => {
  I.amOnPage('/#/favorites');
});

Scenario('unlike one food', async ({ I }) => {
  I.dontSeeElement('item-food');

  I.amOnPage('/');

  I.scrollTo('list-food');
  I.wait(1);

  I.seeElement('item-food h2');

  const firstFood = locate('item-food h2').first();
  const firstFoodHref = locate('item-food a').first();

  const firstFoodTitle = await I.grabTextFrom(firstFood);

  I.click(firstFoodHref);

  I.seeElement('.button-add-to-favorite');
  I.click('.button-add-to-favorite');

  I.amOnPage('/#/favorites');
  I.scrollTo('list-food');
  I.wait(1);

  const likedFoods = await I.grabTextFrom(
    locate('item-food h2').first()
  );

  assert.strictEqual(firstFoodTitle, likedFoods);

  I.seeElement('item-food h2');

  const firstLikedFoodHref = locate('item-food a').first();

  I.click(firstLikedFoodHref);

  I.seeElement('.button-remove-from-favorite');
  I.click('.button-remove-from-favorite');

  I.amOnPage('/#/favorites');
  I.dontSeeElement('item-food');
});
