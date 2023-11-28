import { expect, test } from '../../../testObjects/QA-Playground/base/fixtures/dynamicTableFixture'

test("Then Real Name Should be Eric O'Grady", async ({ dynamicTableFixture: dynamicTable }) => {
    const AntMansCurrentRow = dynamicTable.dynamicTablePageLocators.AntManRowLocator
    
    const ExpectedName = "Eric O'Grady"
    await expect(AntMansCurrentRow).toContainText(ExpectedName)
}),

test('Then Status Should Be Active', async ({ dynamicTableFixture: dynamicTable }) => {
    const AntMansCurrentRow = dynamicTable.dynamicTablePageLocators.AntManRowLocator
    
    const ExpectedStatus = 'Active'
    await expect(AntMansCurrentRow).toContainText(ExpectedStatus)
}),

test('Then Email Should be ant-man@avengers.com', async ({ dynamicTableFixture: dynamicTable }) => {
    const AntMansCurrentRow = dynamicTable.dynamicTablePageLocators.AntManRowLocator
    
    const ExpectedEmail = 'ant-man@avengers.com'
    await expect(AntMansCurrentRow).toContainText(ExpectedEmail)
})


