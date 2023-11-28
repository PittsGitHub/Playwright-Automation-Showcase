import { expect, test } from '../../../testObjects/QA-Playground/base/fixtures/dynamicTableFixture'

test('Then Real Name Should be  Wade Wilson ', async ({ dynamicTableFixture: dynamicTable }) => {
    const DeadPoolsCurrentRow = dynamicTable.dynamicTablePageLocators.DeadpoolRowLocator
    
    const ExpectedName = ' Wade Wilson '
    await expect(DeadPoolsCurrentRow).toContainText(ExpectedName)
}),

test('Then Status Should Be Active', async ({ dynamicTableFixture: dynamicTable }) => {
    const DeadPoolsCurrentRow = dynamicTable.dynamicTablePageLocators.DeadpoolRowLocator
    
    const ExpectedStatus = 'Active'
    await expect(DeadPoolsCurrentRow).toContainText(ExpectedStatus)
}),

test('Then Email Should be deadpool@avengers.com', async ({ dynamicTableFixture: dynamicTable }) => {
    const DeadPoolsCurrentRow = dynamicTable.dynamicTablePageLocators.DeadpoolRowLocator
    
    const ExpectedEmail = 'deadpool@avengers.com'
    await expect(DeadPoolsCurrentRow).toContainText(ExpectedEmail)
})


