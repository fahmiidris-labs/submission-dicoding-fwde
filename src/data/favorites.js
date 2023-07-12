import { openDB } from 'idb';

const DATABASE_NAME = 'restaurants-database';
const DATABASE_VERSION = 1;
const OBJECT_STORE_NAME = 'restaurants';

const idbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavoriteIDB = {
  getFoodById: async (id) => (await idbPromise).get(OBJECT_STORE_NAME, id),

  getFoods: async () => (await idbPromise).getAll(OBJECT_STORE_NAME),

  putFood: async (restaurant) => (await idbPromise).put(OBJECT_STORE_NAME, restaurant),

  deleteFood: async (id) => (await idbPromise).delete(OBJECT_STORE_NAME, id),
};

export default FavoriteIDB;
