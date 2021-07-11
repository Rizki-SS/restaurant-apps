/* eslint-disable new-cap */
Feature('Liking Resto');

Before(({I}) => {
  I.amOnPage('/');
});

Scenario('Add User Review', async ({I}) => {
  I.seeElement('.card__title a');
  const firstRestaurant = locate('.card__title a').first();
  I.click(firstRestaurant);

  I.fillField('nama', 'Testing');
  I.fillField('komentar', 'Test insert Komentar');
  I.click('Tambahkan Komentar');

  I.see('Testing', '.card__komentar');
  I.see('Test insert Komentar', '.card__komentar');
});
