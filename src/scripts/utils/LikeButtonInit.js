import RestourantDB from '../data/restoran-idb';
import {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from '../views/templates/favButton';

const LikeButtonInit = {
  async init({likeButtonContainer, restorant}) {
    this._likeButtonContainer = likeButtonContainer;
    this._restorant = restorant;

    await this._renderButton();
  },

  async _renderButton() {
    const {id} = this._restorant;

    if (await this._isRestorantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestorantExist(id) {
    const restorant = await RestourantDB.getById(id);
    return !!restorant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#fav');
    likeButton.addEventListener('click', async () => {
      await RestourantDB.add(this._restorant);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#fav');
    likeButton.addEventListener('click', async () => {
      await RestourantDB.delete(this._restorant.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInit;
