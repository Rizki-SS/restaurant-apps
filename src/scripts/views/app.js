import DrawerInit from '../utils/drawer';
import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';

class App {
  constructor({button, drawer, content}) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInit.init({
      menuBtn: this._button,
      drawer: this._drawer,
      main: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
