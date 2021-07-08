import RestourantDB from '../src/scripts/data/restoran-idb';
import {createLikeButtonPresenter} from './helpers/testFactories';

describe('Menyukai Resotorant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when has not been liked before',
      async () => {
        await createLikeButtonPresenter({id: 1});

        expect(document.querySelector('[aria-label="like this restourant"]'))
            .toBeTruthy();
      });

  it('not show the unlike button when has not been liked before',
      async () => {
        await createLikeButtonPresenter({id: 1});

        expect(document.querySelector('[aria-label="#unlike this restourant"]'))
            .toBeFalsy();
      });

  it('should be able to like', async () => {
    await createLikeButtonPresenter({id: 1});

    document.querySelector('.like').dispatchEvent(new Event('click'));
    const restorant = await RestourantDB.getById(1);

    expect(restorant).toEqual({id: 1});

    RestourantDB.delete(1);
  });

  it('should not add again when its already liked', async () => {
    await createLikeButtonPresenter({id: 1});

    await RestourantDB.put({id: 1});
    document.querySelector('.like').dispatchEvent(new Event('click'));
    expect(await RestourantDB.getAll()).toEqual([{id: 1}]);
    RestourantDB.delete(1);
  });

  it('should not add when it has no id', async () => {
    await createLikeButtonPresenter({});
    document.querySelector('.like').dispatchEvent(new Event('click'));

    expect(await RestourantDB.getAll()).toEqual([]);
  });
});
