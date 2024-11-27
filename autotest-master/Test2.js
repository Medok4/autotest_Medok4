const {By, Builder, Browser} = require('selenium-webdriver');
const assert = require("assert");

//Второй Тест: Переход по ссылке "Би-2"

(async function secondTest() {
    let driver;
    try {
        driver = await new Builder().forBrowser(Browser.CHROME).build();
        await driver.get('https://muzwi.ru/');
        let title = await driver.getTitle();
        assert.equal("Music Wiki - ваш путеводитель в мире музыки", title);
        await driver.manage().setTimeouts({implicit:500})
        let button1=await driver.findElement(
            By.xpath('/html/body/div[1]/section/div/div/div[2]/h5[1]/a'));
        await button1.click();
        

    } catch (e) {
        console.log(e)
    } finally {
    //    await driver.quit();
    }
}())

