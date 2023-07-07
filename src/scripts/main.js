import routes from './routes';
import UrlParser from './url-parser';

const main = () => {
  const content = document.querySelector('#content');

  const renderResult = async () => {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];

    content.innerHTML = await page.render();

    await page.afterRender();
  };

  renderResult();
};

export default main;
