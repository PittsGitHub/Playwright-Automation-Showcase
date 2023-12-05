import { expect, test } from '../../../testObjects/QA-Playground/base/fixtures/dynamicTableFixture'

test("Then Real Name Should be Anthony 'Tony' Stark", async ({ dynamicTableFixture }) => {
  const IronManCurrentRow = dynamicTableFixture.dynamicTablePageLocators.IronManRowLocator
  const ExpectedName = "Anthony 'Tony' Stark"

  await expect(IronManCurrentRow).toContainText(ExpectedName)
}),
  test('Then Status Should Be Active', async ({ dynamicTableFixture }) => {
    const IronManCurrentRow = dynamicTableFixture.dynamicTablePageLocators.IronManRowLocator
    const ExpectedStatus = 'Active'

    await expect(IronManCurrentRow).toContainText(ExpectedStatus)
  }),
  test('Then Email Should be iron-man@avengers.com', async ({ dynamicTableFixture }) => {
    const IronManCurrentRow = dynamicTableFixture.dynamicTablePageLocators.IronManRowLocator
    const ExpectedEmail = 'iron-man@avengers.com'

    await expect(IronManCurrentRow).toContainText(ExpectedEmail)
  })
