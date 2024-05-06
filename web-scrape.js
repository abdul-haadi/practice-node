import puppeteer from "puppeteer";
// import fs from "fs"

// async function getCookies() {
//     const cookiesJSON = fs.readFile('cookies.json')
//     const cookies = JSON.parse(cookiesJSON)
//     await page.setCookies(...cookies)
// }

const main = async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto("https://www.nytimes.com/international/section/world/asia", {
    timeout: 60000,
  });
//   getCookies()
  await page.setViewport({ width: 1280, height: 1024 });

  const search = "#stream-panel > div > ol > li > div > article > a";
  const elements = await page.$$(search);
  // const element = await page.waitForSelector(search)

  const links = [];

  for (const element of elements) {
    const data = await element.evaluate((e) => e.href);
    links.push(data);
  }

  for (const link of links) {
    page.goto(link, {
        timeout: 120000
    });
    try{
        // const author = await page.$eval('#story > header > div.css-103l8m3 > div > div > p:nth-child(1)', (e) => e.textContent)
        const select = "#story";
        const elem = await page.waitForSelector(select);
        
        const Title = await elem.$eval('header > div.css-1vkm6nb.ehdk2mb0', (e) => e.textContent);
        const Author = await elem.$eval('header > div.css-103l8m3 > div > div > p:nth-child(1)', (e) => e.textContent);
        const desc = await elem.$eval('section > div > div', (e) => e.textContent);
        console.log({ Title:Title, Author:Author, Article: desc});
    }
    catch(err){
        console.log(err, "Content not found")
    }
  }
};

main();
