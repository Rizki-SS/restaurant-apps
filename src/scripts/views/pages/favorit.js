import RestourantDB from '../../data/restoran-idb';
import restorantCard from '../templates/restorantCard';

const Favorit = {
  async render() {
    return `
      <h1 class="page__title">Restoran Favorit mu</h1>
      <section class="content">
        
      </section>
    `;
  },

  async afterRender() {
    const restorantList = await RestourantDB.getAll();
    console.log(restorantList);
    const restorantElem = document.querySelector('.content');
    if (restorantList.length > 0) {
      restorantList.forEach((restorant) => {
        restorantElem.innerHTML += restorantCard(restorant);
      });
    } else {
      restorantElem.innerHTML +=
      `<p class="empty__tag">
          Hmmmm... Tampaknya belum ada restorant yang anda sukai
        </p>`;
    }
  },
};

export default Favorit;
