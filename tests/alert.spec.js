import {test} from '@playwright/test'

test('Alert Handling', async({page})=> {

    await page.goto('https://demo.automationtesting.in/Alerts.html');

    await page.locator('//a[text()="Alert with Textbox "]').click();

    page.on('dialog',async(promptAlertHandling)=>{
        console.log('The Prompt Alert Message is : ', promptAlertHandling.message())
        await promptAlertHandling.accept('Trendknowledges');

        console.log('The Prompt Alert Message is the new message: ', 'promptAlertMessage.textContent()')
    })
    await page.locator('//button[@onclick="promptbox()"]').click()

    console.log('The Prompt Alert: ', 'promptAlertMessage.textContent()')
})