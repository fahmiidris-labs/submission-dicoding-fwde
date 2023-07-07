import routes from './routes';
import UrlParser from './url-parser';

const main = () => {
  const content = document.querySelector('#content');

  const renderResult = async () => {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];

    content.innerHTML = await page.render();

    await page.afterRender();

    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#content').focus();
    });
  };

  renderResult();
};

export default main;
