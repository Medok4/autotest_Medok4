const {By, Builder, Browser} = require('selenium-webdriver');
const assert = require("assert");

// Первый тест: Открытие страницы

(async function firstTest() {
    let driver;
    try {
        driver = await new Builder().forBrowser(Browser.CHROME).build();
        await driver.get('https://muzwi.ru/');
        let title = await driver.getTitle();
        assert.equal("Music Wiki - ваш путеводитель в мире музыки", title);
        await driver.manage().setTimeouts({implicit:500})
    } catch (e) {
        console.log(e)
    } finally {
    //    await driver.quit();
    }
}())

