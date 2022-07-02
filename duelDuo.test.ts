
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Draw Button displays div with id of "choices" shows up when page loads', async () => {
    const drawBtn = await driver.findElement(By.id('choices'))
    const displayedBtn = await drawBtn.isDisplayed()
    expect(displayedBtn).toBe(true)
})

test('Clicking Add Duo button displays correct div', async () => {
    const addDuoBtn = await driver.findElement(By.id('player-duo'))
    const displayAddDuo = await addDuoBtn.isDisplayed()
    expect(displayAddDuo).toBe(true)
})