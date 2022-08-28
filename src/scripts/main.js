import '../components/list-food';
import DATA from '../DATA.json';

const main = () => {
  const listFoodElement = document.querySelector('list-food');

  const renderResult = results => {
    listFoodElement.foods = results;
  };

  renderResult(DATA)
};

export default main;
