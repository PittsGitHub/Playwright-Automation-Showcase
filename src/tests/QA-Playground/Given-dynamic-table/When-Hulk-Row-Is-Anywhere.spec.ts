import { expect, test } from '../../../testObjects/QA-Playground/base/fixtures/dynamicTableFixture'

test('Then Real Name Should be Robert Bruce Banner', async ({ dynamicTableFixture }) => {
  const HulksCurrentRow = dynamicTableFixture.dynamicTablePageLocators.HulkRowLocator
  const ExpectedName = 'Robert Bruce Banner'

  await expect(HulksCurrentRow).toContainText(ExpectedName)
}),
  test('Then Status Should Be Active', async ({ dynamicTableFixture }) => {
    const HulksCurrentRow = dynamicTableFixture.dynamicTablePageLocators.HulkRowLocator
    const ExpectedStatus = 'Active'

    await expect(HulksCurrentRow).toContainText(ExpectedStatus)
  }),
  test('Then Email Should be hulk@avengers.com', async ({ dynamicTableFixture }) => {
    const HulksCurrentRow = dynamicTableFixture.dynamicTablePageLocators.HulkRowLocator
    const ExpectedEmail = 'hulk@avengers.com'

    await expect(HulksCurrentRow).toContainText(ExpectedEmail)
  })
