import LikeButtonInit from '../../src/scripts/utils/LikeButtonInit';

const createLikeButtonPresenter = async (restorant) => {
  await LikeButtonInit.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    restorant,
  });
};

export {createLikeButtonPresenter};
