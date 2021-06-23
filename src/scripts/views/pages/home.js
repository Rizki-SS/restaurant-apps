import RestorantData from '../../data/restorant-data';
import restorantCard from '../templates/restorantCard';

const Home = {
  async render() {
    return `
      <div class="hero">
            <div class="hero__inner">
                <h1 class="hero__title">Cari Tempat Makanmu hari ini</h1>
                <p class="hero__tagline">
                Dapatkan informasi seputar tempat makan
                yang sesuai dengan suasana hari mu
                </p>
            </div>
        </div>
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
