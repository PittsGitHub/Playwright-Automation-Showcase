import { test, expect } from '../../../testObjects/QA-Playground/base/fixtures/verifyAccountFixture'

test("Then 'Success' should NOT be displayed", async ({ verifyAccountFixture, page }) => {
  //Pin provided is 9-9-9-9-9-9
  const pinDigit: string = '5'

  await verifyAccountFixture.verifyAccountLocators.PinInput1.fill(pinDigit)
  await verifyAccountFixture.verifyAccountLocators.PinInput2.fill(pinDigit)
  await verifyAccountFixture.verifyAccountLocators.PinInput3.fill(pinDigit)
  await verifyAccountFixture.verifyAccountLocators.PinInput4.fill(pinDigit)
  await verifyAccountFixture.verifyAccountLocators.PinInput5.fill(pinDigit)
  await verifyAccountFixture.verifyAccountLocators.PinInput6.fill(pinDigit)
  await page.keyboard.press('Enter')

  await expect(verifyAccountFixture.verifyAccountLocators.SuccessDisplay).not.toBeVisible()
})
