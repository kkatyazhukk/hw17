// const { Builder, By, until } = require('selenium-webdriver');
// const { expect } = require('chai');

// // driver.manage().setTimeouts( { implicit: 10000 } );

// describe(`new tests`, function() {
//     let driver;
//     beforeEach(async() => {
//         driver = new Builder().forBrowser('chrome').build();
//     });

//     afterEach(async() => {
//         await driver.close();
//     })

//     it(`new test`, async () => {
//         await driver.get('https://chromedriver.chromium.org/home');
//         await driver.sleep(5000);
//     })

//     it(`bbc test home tab`, async() => {
//         await driver.get('https://www.bbc.com/');
//         const homeButtonNavMenu = driver.findElement(By.css('.orb-nav .orb-nav-homedotcom'));
//         await homeButtonNavMenu.click();
//         expect(await driver.getCurrentUrl()).to.equal('https://www.bbc.com/');   
//     })

//     it.skip('check news tab', async () => {
//         await driver.get('https://www.bbc.com/');
//         const homeButtonNavMenu = await driver.findElement(By.css('.orb-nav .orb-nav-sport'));
//         await homeButtonNavMenu.click();
//         expect(await driver.getCurrentUrl()).to.equal('https://www.bbc.com/sport'); 
//     });

//     it.skip('check search', async () => {
//         await driver.get('https://www.bbc.com/');
//         const searchButton = await driver.findElement(By.id('orbit-search-button'));
//         await driver.wait(function() {
//             return searchButton.isDisplayed();
//         }, 10000);
//         // await driver.wait(until.elementIsVisible(searchButton), 10000);
//         await searchButton.click();
//         const searchField = await driver.findElement(By.id('search-input'));

//         await searchField.sendKeys('Liverpool fc');
//         const submitSearchButton = await driver.findElement(By.css('.ssrcss-1qt5at0-StyledDiv.e56i0qu1 .ssrcss-1wj2dcl-Button.etotop31'));

//         await submitSearchButton.click();
//         expect(await driver.getCurrentUrl()).to.contain('Liverpool+fc');

//     })

//     it.skip('check search', async () => {
//         await driver.get('https://www.mountvernon.org/');
//         const pairWrapper = await driver.findElement(By.css('.explore_desktop .component_pair_wrapper'));
        
//         await driver.executeScript("arguments[0].scrollIntoView();", pairWrapper);
//         const carouselContainer = await driver.findElement(By.css('.explore_desktop .component_pair_wrapper .fs-carousel-container'));
//         await driver.actions().dragAndDrop(carouselContainer, {x: -100, y: 0}).perform();
//         await driver.sleep(2000);
//     });

//     it('check library tab', async () => {
//         await driver.get('https://www.mountvernon.org/');
//         const topNavMenuTabs = await driver.findElements(By.css('.positioner'));
//         await driver.wait(until.elementIsVisible(topNavMenuTabs[0]), 5000);
//         // await driver.actions().mouseMove(topNavMenuTabs[5]).perform();
//         // await driver.sleep(2000);
//         // //await topNavMenuTabs[5].hoverOver();
//         // const aboutLibrary = await driver.findElement(By.css('[href="https://www.mountvernon.org/library/"]'));

//     })
// })