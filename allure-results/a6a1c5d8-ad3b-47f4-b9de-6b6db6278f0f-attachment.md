# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pom.spec.js >> POM Booking Page
- Location: tests\pom.spec.js:15:5

# Error details

```
TypeError: Class constructor BookingPage cannot be invoked without 'new'
```

# Test source

```ts
  1  | import {test} from '@playwright/test'
  2  | import {LoginPage} from '../page/LoginPage'
  3  | import {BookingPage} from '../page/BookingPage'
  4  | 
  5  | test('POM Login page', async({page})=>{
  6  | 
  7  |     const login=new LoginPage(page)
  8  |     await login.gotoUrl()
  9  |     await login.enterUsername()
  10 |     await login.enterPassword()
  11 |     await login.clickButton()
  12 | 
  13 | })
  14 | 
  15 | test ('POM Booking Page', async({page})=>{
> 16 |     const Booking =BookingPage(page)
     |                               ^ TypeError: Class constructor BookingPage cannot be invoked without 'new'
  17 |     await Booking.selectlocation()
  18 |     await Booking.selecthotel()
  19 |     await Booking.selectRoomType()
  20 |     await Booking.selectRooms()
  21 |     await Booking.checkin()
  22 |     await Booking.checkOut()
  23 |     await Booking.selectAdults()
  24 |     await Booking.selectChildren()
  25 |     await Booking.clickButton()
  26 | })
```