import RestorantData from '../../data/restorant-data';
import UrlParser from '../../routes/url-parser';
import LikeButtonInit from '../../utils/LikeButtonInit';
import restorantDetail from '../templates/restorantDetail';

const Detail = {
  async render() {
    return `
      <article class="restorant__content">
      </article>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restorant = await RestorantData.getRestorantById(url.id);
    document.querySelector('.restorant__content')
        .innerHTML = restorantDetail(restorant);

    this.showKomentar(restorant.customerReviews);

    document.querySelector('#sumbit__komentar')
        .addEventListener('click', () => {
          this.postKoment(url.id);
        });

    LikeButtonInit.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restorant: {
        id: restorant.id,
        name: restorant.name,
        description: restorant.description,
        city: restorant.city,
        address: restorant.address,
        pictureId: restorant.pictureId,
        categories: restorant.categories,
        menus: restorant.menus,
        rating: restorant.rating,
        customerReviews: restorant.customerReviews,
      },
    });
  },

  async postKoment(id) {
    const data = {
      'id': id,
      'name': document.querySelector('#name__komentar').value,
      'review': document.querySelector('#isi__komentar').value,
    };
    const post = await RestorantData.postReview(data);
    this.showKomentar(post.customerReviews);
    this.setNullInput();
  },

  showKomentar(komentarList) {
    const komenHtml = document.querySelector('.list__kometar');
    let komenHtmldata = '';
    komentarList.map((komentar)=>{
      komenHtmldata +=
      `<div class="card__komentar">
        <b>${komentar.name}</b>
        <span>${komentar.date}</span>
        <p>${komentar.review}</p>
      </div>`;
    });
    komenHtml.innerHTML = komenHtmldata;
  },

  setNullInput() {
    document.querySelector('#name__komentar').value = '';
    document.querySelector('#isi__komentar').value = '';
  },
};

export default Detail;
