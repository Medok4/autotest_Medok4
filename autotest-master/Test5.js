const {By, Builder, Browser} = require('selenium-webdriver');
const assert = require("assert");

//Пятый тест: Перейти к списку исполнителей через бургер меню

(async function fifthTest() {
    let driver;
    try {
        driver = await new Builder().forBrowser(Browser.CHROME).build();
        await driver.get('https://muzwi.ru/');
        let title = await driver.getTitle();
        assert.equal("Music Wiki - ваш путеводитель в мире музыки", title);
        await driver.manage().setTimeouts({implicit:500})
        let button1=await driver.findElement(
            By.xpath('/html/body/div[1]/header/div/nav/div/div/div[1]/button'));
        await button1.click();
        let button2=await driver.findElement(
            By.xpath('/html/body/div[1]/header/div/nav/div/div/div[2]/div/ul/li[2]/a'));
        await button2.click();
        

    } catch (e) {
        console.log(e)
    } finally {
    //    await driver.quit();
    }
}())

