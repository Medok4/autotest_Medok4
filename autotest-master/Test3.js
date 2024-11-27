const {By, Builder, Browser} = require('selenium-webdriver');
const assert = require("assert");

//Третий тест: Запросить в поисковой строке "AJR" 

(async function thirdTest() {
    let driver;
    try {
        driver = await new Builder().forBrowser(Browser.CHROME).build();
        await driver.get('https://muzwi.ru/');
        let title = await driver.getTitle();
        assert.equal("Music Wiki - ваш путеводитель в мире музыки", title);
        await driver.manage().setTimeouts({implicit:500})
        let textBox = await driver.findElement(By.xpath("/html/body/div[1]/header/div/nav/div/div/div[1]/div[2]/form/input"));
        let button1=await driver.findElement(
            By.xpath('/html/body/div[1]/header/div/nav/div/div/div[1]/div[2]/form/button'));
        await textBox.sendKeys('AJR');
        await button1.click();
        

    } catch (e) {
        console.log(e)
    } finally {
    //    await driver.quit();
    }
}())

