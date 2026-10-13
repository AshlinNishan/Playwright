// import {test} from '@playwright/test'

// test('Alert Handling', async({page})=> {

//     await page.goto('https://demo.automationtesting.in/Alerts.html');


//     // page.on('dialog', async(Alerts)=>{

//     //     await Alerts.accept('Ashlin')
//     //     console.log('The Alert Mesage is ;', Alerts.message());
//     //     console.log('The type of Alert is :', Alerts.type());
        
//     // })

//     // await page.locator('//button[@onclick="alertbox()"]').click();

//     // await page.locator('(//a[@class="analystic"])[2]').click();

//     // await page.locator('//button[@onclick="confirmbox()"]').click();

//     // await page.locator('(//a[@class="analystic"])[3]').click();

//     // await page.locator('//button[@onclick="promptbox()"]').click();


//     page.once('dialog', async(Alerts)=>{

//         await Alerts.accept('Ashlin')
//         console.log('The Alert Mesage is ;', Alerts.message());
//         console.log('The type of Alert is :', Alerts.type());
//     }
// )

// await page.locator('(//a[@class="analystic"])[3]').click();

//     await page.locator('//button[@onclick="promptbox()"]').click();


// })




import {test} from '@playwright/test'   

test('frame', async({page})=> {

    await page.goto('https://demo.automationtesting.in/Frames.html');

    const frames = await page.frameLocator('//iframe[@src="SingleFrame.html"]');

    // const frames = await page.frameLocator('//input[@type="text"]');

    await frames.locator('//input[@type="text"]').fill('Ashlin');

    await page.waitForTimeout(5000)

})


