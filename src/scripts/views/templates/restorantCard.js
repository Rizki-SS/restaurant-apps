import CONFIG from '../../globals/config';

const restorantCard = (restorant) => `
  <div class="card">
      <picture class="card__thumb">
        <source  
          media="(max-width: 600px)" 
          data-srcset=
            "${CONFIG.baseImgaeUrl('small')}/${restorant['pictureId']}"
          >
        <img 
          data-src="${CONFIG.baseImgaeUrl('medium')}/${restorant['pictureId']}" 
          alt="${restorant['name']}"
          class="lazyload"
          width="200" height="200"
          title="${restorant['name']}"
        >
      </picture>
      <div class="card__content">
          <p class="card__city">${restorant['city']}</p>
          <p class="card__rating">
              Rating : ${restorant['rating']}
          </p>
          <h1 class="card__title">
            <a href="#/detail/${restorant['id']}">
              ${restorant['name']}
            </a>
          </h1>
          <p class="card__desc">
          ${restorant['description'].slice(0, 150)}...
          </p>
      </div>
  </div>
`;


export default restorantCard;
