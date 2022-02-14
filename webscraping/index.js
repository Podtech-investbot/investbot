const puppeteer = require('puppeteer');

module.exports = async function (codigo) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`https://investidor10.com.br/acoes/${codigo}/`);

  let price = await page.evaluate(() => {
    return document.querySelector('.cotacao > ._card-body > div > span ')
      .textContent;
  });

  await browser.close();
  return price;
};
