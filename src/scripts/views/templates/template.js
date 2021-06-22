import CONFIG from '../../globals/config';

const restorantCard = (restorant) => `
  <div class="card">
      <img class="card__thumb" src="
      ${CONFIG.baseImgaeUrl('medium')}/${restorant['pictureId']}"
      alt="${restorant['name']}" title="${restorant['name']}">
      <div class="card__content">
          <p class="card__city">${restorant['city']}</p>
          <p class="card__rating">
              Rating : ${restorant['rating']}
          </p>
          <h1 class="card__title"><a href="#">${restorant['name']}</a></h1>
          <p class="card__desc">
          ${restorant['description'].slice(0, 150)}...
          </p>
      </div>
  </div>
`;


export {
  restorantCard,
};