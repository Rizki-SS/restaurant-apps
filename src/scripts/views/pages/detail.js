import UrlParser from '../../routes/url-parser';

const Detail = {
  async render() {
    return `
      <section class="content">
      </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    console.log(url.id);
  },
};

export default Detail;
