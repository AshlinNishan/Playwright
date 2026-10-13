import {test} from '@playwright/test'

test('WebTable verification' , async ({browser}) => {

    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://assertqa.com/practice/webtables')

    const rowDropdown = await page.locator('//select[@aria-label="Rows per page"]')

    await rowDropdown.selectOption({label:'25'})

    const table = await page.locator('//table[@id="employees-table"]')

    const valuesInTable = await table.allTextContents()

    console.log(valuesInTable)

   const availabllity =  await valuesInTable.allTextContents(contains("john.smith@company.com"))



})