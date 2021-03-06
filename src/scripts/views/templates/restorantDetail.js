import CONFIG from '../../globals/config';

const templateRating = (rating) => {
  const rate = [];
  for (let i = 0; i < parseInt(Math.floor(rating)); i++) {
    rate.push('<i class="fas fa-star"></i>');
  }
  return rate;
};

const restorantDetail = (restorant) => `
    <section class="detail__about">
      <picture >
        <source 
          media="(max-width: 600px)" 
          srcset="${CONFIG.baseImgaeUrl('small')}/${restorant.pictureId}"
        >
        <img 
          class="detail__tumb"
          src="${CONFIG.baseImgaeUrl('medium')}/${restorant.pictureId}" 
          alt="${restorant.name}"
          title="${restorant.name}"
        >
      </picture>
      <h1 class="detail__title">
        ${restorant.name}
      </h1>
      <p class="detail__city">
        <i class="fas fa-map-marker-alt"></i>
         ${restorant.address}, ${restorant.city}
      </p>
      <p class="detail__rating">
        <span>Rating : ${restorant.rating}</span>
        ${templateRating(restorant.rating).map((item) => item).join('')}
      </p>
      <p class="detail__desc">
        ${restorant.description}
      </p>
      <ul class="detail__kategori">
        ${restorant.categories.map((kategori)=>(
    `<li>${kategori.name}</li>`
  )).join('')}
      </ul>
    </section>
    <section class="detail__menu">
      <div class="sidebar__card">
        <h2 class="sidebar__card__title">Food</h2>
        <div class="sidebar__card__content">
          <ul class="menu_list">
            ${restorant.menus.foods.map((food)=>(
    `<li class="menu-item">${food.name}</li>`
  )).join(' ')}
          </ul>
        </div>
      </div>
      <div class="sidebar__card">
        <h2 class="sidebar__card__title">Drink</h2>
        <div class="sidebar__card__content">
          <ul class="menu_list">
            ${restorant.menus.drinks.map((drink)=>(
    `<li class="menu-item">${drink.name}</li>`
  )).join(' ')}
          </ul>
        </div>
      </div>
    </section>
    <section class="komentar">
        <h2>Komentar</h2>
        <div class="form__review">
          <div class="form__group">
            <input 
              id="name__komentar" 
              type="text" 
              name="nama" 
              placeholder="Nama" />
          </div>
          <div class="form__group">
            <textarea 
              id="isi__komentar" 
              name="komentar" 
              rows="4" 
              placeholder="Komentar"></textarea>
          </div>
          <div class="form__group">
            <input id="sumbit__komentar"
              type="submit"
              value="Tambahkan Komentar" />
          </div>
        </div>
        <div class="list__kometar">
            
        </div>
    </section>
    
`;

export default restorantDetail;
