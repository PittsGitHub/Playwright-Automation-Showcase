import { expect, test } from '../../../testObjects/QA-Playground/base/fixtures/dynamicTableFixture'

test('Then Real Name Should be  Steve Rogers ', async ({ dynamicTableFixture }) => {
    const CaptainAmericaCurrentRow = dynamicTableFixture.dynamicTablePageLocators.CaptainAmericaRowLocator
    
    const ExpectedName = ' Steve Rogers '
    await expect(CaptainAmericaCurrentRow).toContainText(ExpectedName)
}),

test('Then Status Should Be Active', async ({ dynamicTableFixture }) => {
    const CaptainAmericaCurrentRow = dynamicTableFixture.dynamicTablePageLocators.CaptainAmericaRowLocator
    
    const ExpectedStatus = 'Active'
    await expect(CaptainAmericaCurrentRow).toContainText(ExpectedStatus)
}),

test('Then Email Should be captain-america@avengers.com', async ({ dynamicTableFixture }) => {
    const CaptainAmericaCurrentRow = dynamicTableFixture.dynamicTablePageLocators.CaptainAmericaRowLocator
    
    const ExpectedEmail = 'captain-america@avengers.com'
    await expect(CaptainAmericaCurrentRow).toContainText(ExpectedEmail)
})


