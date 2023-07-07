import { API } from '../config/api';

export const getFoods = async () => {
  const foods = await fetch(API.LIST);
  const json = await foods.json();

  return json;
};

export const getFoodById = async (id) => {
  const food = await fetch(API.DETAIL(id));
  const json = await food.json();

  return json;
};
