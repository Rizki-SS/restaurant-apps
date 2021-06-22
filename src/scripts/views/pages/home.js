import RestorantData from '../../data/restorant-data';
import restorantCard from '../templates/restorantCard';

const Home = {
  async render() {
    return `
      <section class="content">

      </section>
    `;
  },

  async afterRender() {
    const restorantList = await RestorantData.getAllRestorant();
    const restorantElem = document.querySelector('.content');
    restorantList.forEach((restorant) => {
      restorantElem.innerHTML += restorantCard(restorant);
    });
  },
};

export default Home;
