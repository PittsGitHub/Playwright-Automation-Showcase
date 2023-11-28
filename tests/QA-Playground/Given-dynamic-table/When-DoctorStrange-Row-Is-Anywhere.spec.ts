import { expect, test } from '../../../testObjects/QA-Playground/base/fixtures/dynamicTableFixture'

test('Then Real Name Should be  Stephen Vincent Strange ', async ({ dynamicTableFixture: dynamicTable }) => {
    const DoctorStrangeCurrentRow = dynamicTable.dynamicTablePageLocators.DoctorStrangeRowLocator
    
    const ExpectedName = ' Stephen Vincent Strange '
    await expect(DoctorStrangeCurrentRow).toContainText(ExpectedName)
}),

test('Then Status Should Be Active', async ({ dynamicTableFixture: dynamicTable }) => {
    const DoctorStrangeCurrentRow = dynamicTable.dynamicTablePageLocators.DoctorStrangeRowLocator
    
    const ExpectedStatus = 'Active'
    await expect(DoctorStrangeCurrentRow).toContainText(ExpectedStatus)
}),

test('Then Email Should be doctor-strange@avengers.com', async ({ dynamicTableFixture: dynamicTable }) => {
    const DoctorStrangeCurrentRow = dynamicTable.dynamicTablePageLocators.DoctorStrangeRowLocator
    
    const ExpectedEmail = 'doctor-strange@avengers.com'
    await expect(DoctorStrangeCurrentRow).toContainText(ExpectedEmail)
})


