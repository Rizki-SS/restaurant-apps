import RestorantData from '../../data/restorant-data';
import {restorantCard} from '../templates/template';

const Home = {
  async render() {
    return `
      <div id="restoran-list"></div>
    `;
  },

  async afterRender() {
    const restorantList = await RestorantData.getAllRestorant();
    const restorantElem = document.querySelector('#restoran-list');
    restorantList.forEach((restorant) => {
      restorantElem.innerHTML += restorantCard(restorant);
    });
  },
};

export default Home;
