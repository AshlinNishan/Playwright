import {test} from '@playwright/test'
import {LoginPage} from '../page/LoginPage'
import {BookingPage} from '../page/BookingPage'

test('POM Login page', async({page})=>{

    const login=new LoginPage(page)
    await login.gotoUrl()
    await login.enterUsername()
    await login.enterPassword()
    await login.clickButton()

})

test ('POM Booking Page', async({page})=>{
    const Booking =BookingPage(page)
    await Booking.selectlocation()
    await Booking.selecthotel()
    await Booking.selectRoomType()
    await Booking.selectRooms()
    await Booking.checkin()
    await Booking.checkOut()
    await Booking.selectAdults()
    await Booking.selectChildren()
    await Booking.clickButton()
})