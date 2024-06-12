import { Before, After, AfterAll, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Browser, BrowserContext, Page } from 'playwright';

let browser: Browser;
let context: BrowserContext;
let page: Page;

setDefaultTimeout(60 * 1000);

Before(async function () {
  if (!browser) {
    browser = await chromium.launch({ 
      headless: false
    });
  }
  context = await browser.newContext();
  page = await context.newPage();
  this.context = context;
  this.page = page;
});

After(async function () {
  await page.close();
  await context.close();
});

AfterAll(async function () {
  if (browser) {
    await browser.close();
  }
});

export { page, context };
