import RestorantData from '../../data/restorant-data';
import UrlParser from '../../routes/url-parser';
import restorantDetail from '../templates/restorantDetail';

const Detail = {
  async render() {
    return `
      <article class="restorant__content">
      </article>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restorant = await RestorantData.getRestorantById(url.id);
    document.querySelector('.restorant__content').innerHTML = restorantDetail(restorant);
  },
};

export default Detail;
