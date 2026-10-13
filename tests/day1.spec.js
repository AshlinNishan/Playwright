import {test} from 'playwright/test'

test('trial' , async ({page}) => {

    
    await page.goto(' https://demo.automationtesting.in/Register.html');

    const title = await page.locator("//h2[text()='Register']").textContent();
    
    console.log('Title:', title)

    await page.locator(' //input[@ng-model="FirstName"]').fill('Ashlin');

    await page.locator(' //input[@ng-model="LastName"]').fill('Nishan');

    await page.locator(' //textarea[@rows="3"]').fill('No.75 Mgr Nagar 3rd street Neelangarai, Chennai - 600115'); 

    await page.locator(' //input[@ng-model="EmailAdress"]').fill('nishuazale@gmail.com');

    await page.locator(' //input[@type="tel"]').fill('9965323831');

    await page.locator(' (//input[@ng-model="radiovalue"])[1]').check();

    await page.locator(' //input[@id="checkbox1"] ').check();

    await page.locator('//div[@id="msdd"]').click();

    await page.locator('//a[text()="English"]').click();

    // await dropDown.locator('option:checked').textContent();

    const secondDrop = await page.locator('//select[@id="Skills"]');

    await secondDrop.selectOption({label:"Adobe InDesign"});

    await secondDrop.locator('option:checked').textContent();

    const country = await page.locator('//select[@id= "country"]');

    await country.selectOption({label:"India"});

    await country.locator('option:checked').textContent();

    const year = await page.locator('//select[@placeholder="Year"]');

    const month = await page.locator('//select[@placeholder="Month"]');

    const date = await page.locator('//select[@placeholder="Day"]');

    await year.selectOption({value:"2000"});

    await month.selectOption({label:"February"});

    await date.selectOption({value:"14"});

    await year.locator('option:checked').textContent();

    await month.locator('option:checked').textContent();

    await date.locator('option:checked').textContent();

    await page.locator('(//input[@type="password"])[1]').fill('Feb@123');

    await page.locator('(//input[@type="password"])[2]').fill('Feb@123');
   
    await page.locator('//button[@id="submitbtn"]').click()

    await page.waitForTimeout(10000);

})
