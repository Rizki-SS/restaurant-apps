import RestourantDB from '../../data/restoran-idb';
import restorantCard from '../templates/restorantCard';

const Favorit = {
  async render() {
    return `
      <section class="content">

      </section>
    `;
  },

  async afterRender() {
    const restorantList = await RestourantDB.getAll();
    console.log(restorantList);
    const restorantElem = document.querySelector('.content');
    restorantList.forEach((restorant) => {
      restorantElem.innerHTML += restorantCard(restorant);
    });
  },
};

export default Favorit;
