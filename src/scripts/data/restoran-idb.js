import {openDB} from 'idb';
import CONFIG from '../globals/config';

const dbPromise = openDB(CONFIG.DATABASE_NAME, CONFIG.DATABASE_VERSI, {
  upgrade(database) {
    database.createObjectStore(CONFIG.OBJECT_STORE_NAME, {keyPath: 'id'});
  },
});

const RestourantDB = {
  async getById(id) {
    if (!id) {
      return;
    }
    return (await dbPromise).get(CONFIG.OBJECT_STORE_NAME, id);
  },

  async getAll() {
    return (await dbPromise).getAll(CONFIG.OBJECT_STORE_NAME);
  },

  async put(restorant) {
    if (!restorant.hasOwnProperty('id')) {
      return;
    }
    return (await dbPromise).put(CONFIG.OBJECT_STORE_NAME, restorant);
  },

  async delete(id) {
    if (!id) {
      return;
    }
    return (await dbPromise).delete(CONFIG.OBJECT_STORE_NAME, id);
  },
};


export default RestourantDB;
