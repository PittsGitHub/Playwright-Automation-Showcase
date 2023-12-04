import { expect, test } from '../../../testObjects/QA-Playground/base/fixtures/dynamicTableFixture'

test('Then Real Name Should be  Natasha Alianovna Romanova ', async ({ dynamicTableFixture }) => {
  const BlackWidowCurrentRow = dynamicTableFixture.dynamicTablePageLocators.BlackWidowRowLocator

  const ExpectedName = 'Natasha Alianovna Romanova'
  await expect(BlackWidowCurrentRow).toContainText(ExpectedName)
}),
  test('Then Status Should Be Active', async ({ dynamicTableFixture }) => {
    const BlackWidowCurrentRow = dynamicTableFixture.dynamicTablePageLocators.BlackWidowRowLocator

    const ExpectedStatus = 'Active'
    await expect(BlackWidowCurrentRow).toContainText(ExpectedStatus)
  }),
  test('Then Email Should be black-widow@avengers.com', async ({ dynamicTableFixture }) => {
    const BlackWidowCurrentRow = dynamicTableFixture.dynamicTablePageLocators.BlackWidowRowLocator

    const ExpectedEmail = 'black-widow@avengers.com'
    await expect(BlackWidowCurrentRow).toContainText(ExpectedEmail)
  })
