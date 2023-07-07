import { openDB } from 'idb';

const DATABASE_NAME = 'restaurants-database';
const DATABASE_VERSION = 1;
const OBJECT_STORE_NAME = 'restaurants';

const idbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

export const getFoodById = async (id) => (await idbPromise).get(OBJECT_STORE_NAME, id);

export const getFoods = async () => (await idbPromise).getAll(OBJECT_STORE_NAME);

export const putFood = async (restaurant) => (await idbPromise).put(OBJECT_STORE_NAME, restaurant);

export const deleteFood = async (id) => (await idbPromise).delete(OBJECT_STORE_NAME, id);
