const createLikeButtonTemplate = () => `
  <button aria-label="like this restourant" id="fav" class="like">
     <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restourant" id="fav" class="like">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
