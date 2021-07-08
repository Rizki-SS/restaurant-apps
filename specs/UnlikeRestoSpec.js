import RestourantDB from '../src/scripts/data/restoran-idb';
import {createLikeButtonPresenter} from './helpers/testFactories';

describe('Batal Menyukai Resotorant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await RestourantDB.put({id: 1});
  });

  afterEach(async () => {
    await RestourantDB.delete(1);
  });

  it('should show the unlike button when has been liked before',
      async () => {
        await createLikeButtonPresenter({id: 1});

        expect(document.querySelector('[aria-label="unlike this restourant"]'))
            .toBeTruthy();
      });

  it('not show the like button when has been liked before',
      async () => {
        await createLikeButtonPresenter({id: 1});

        expect(document.querySelector('[aria-label="#like this restourant"]'))
            .toBeFalsy();
      });

  it('should be able to remove from like list', async () => {
    await createLikeButtonPresenter({id: 1});

    document.querySelector('.like').dispatchEvent(new Event('click'));
    const restorant = await RestourantDB.getAll();

    expect(restorant).toEqual([]);
  });

  it('not throw error if the unliked id is not in the list', async () => {
    await createLikeButtonPresenter({id: 1});

    await RestourantDB.delete(1);
    document.querySelector('.like').dispatchEvent(new Event('click'));

    expect(await RestourantDB.getAll()).toEqual([]);
  });
});
