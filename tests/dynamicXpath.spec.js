import {test} from '@playwright/test'

test('checking amazon', async({browser})=>{

    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://www.amazon.in/')
         await page.locator('//input[@role="searchbox"]').fill('pixel 11 pro')
         await page.keyboard.press('Enter')

         const [newpage] = await Promise.all([context.waitForEvent('page'), page.click('//span[@class="a-color-state a-text-bold"]//ancestor::span[@class="rush-component"]//following-sibling::div[@class="s-desktop-width-max s-desktop-content s-opposite-dir s-wide-grid-style sg-row"]//ancestor::div[@data-asin="B0HFX8WCNF"]//ancestor::span[text()="Pixel 11 5G (Obsidian)"]')])

         await newpage.waitForLoadState()
         const title = await newpage.title()
         console.log(title)

         await page.bringToFront()

         const [newPage1] = await Promise.all([context.waitForEvent('page'), page.click('//span[@class="a-color-state a-text-bold"]//ancestor::span[@class="rush-component"]//following-sibling::div[@class="s-desktop-width-max s-desktop-content s-opposite-dir s-wide-grid-style sg-row"]//ancestor::div[@data-asin="B0HFX7MXB2"]//ancestor::span[text()="Pixel 11 5G (Frost)"]')])

         await newPage1.waitForLoadState()
         const title1 = await newPage1.title()
         console.log(title1)

         
    } )
