const assert = require('assert');

Feature('Liking Resto');

Before(({I}) => {
  I.amOnPage('/#/favorit');
});

Scenario('liking one restaurant', async ({I}) => {
  I.seeElement('.content');
  I.see(
      'Hmmmm... Tampaknya belum ada restorant yang anda sukai',
      '.empty__tag');

  I.amOnPage('/');
  I.seeElement('.card__title a');
  const firstRestaurant = locate('.card__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#fav');
  I.click('#fav');

  I.amOnPage('/#/favorit');
  I.seeElement('.card__title a');
  const likedRestaurant = locate('.card__title a');
  const likedRestaurantTitle = await I.grabTextFrom(likedRestaurant);

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unliking one restaurant', async ({I}) => {
  I.amOnPage('/');
  I.seeElement('.card__title a');
  const firstRestaurant = locate('.card__title a').first();
  I.click(firstRestaurant);

  I.seeElement('#fav');
  I.click('#fav');

  I.amOnPage('/#/favorit');
  I.seeElement('.card__title a');
  const likeRestaurant = locate('.card__title a').first();
  I.click(likeRestaurant);

  I.seeElement('#fav');
  I.click('#fav');

  I.amOnPage('/#/favorit');
  I.see(
      'Hmmmm... Tampaknya belum ada restorant yang anda sukai',
      '.empty__tag');
});
