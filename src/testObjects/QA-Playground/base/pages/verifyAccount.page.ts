import { type Page } from '@playwright/test'
import { VerifyAccountLocators } from '../locators/verifyAccountLocators'

export class VerifyAccountPage {
  readonly verifyAccountLocators: VerifyAccountLocators

  constructor(public readonly page: Page) {
    this.page = page
    this.verifyAccountLocators = new VerifyAccountLocators(page)
  }

  async goto() {
    //Prevents images loading when loading page as they are causing tests to fail
    //Also speeds up testing significantly
    await this.page.route('**/*', (route) => {
      return route
        .request()
        .resourceType()
        .match(/(image)s?/)
        ? route.abort()
        : route.continue()
    })

    await this.page.goto(this.verifyAccountLocators.VerifyAccountURL)

    //Makes sure to get past lazy loading by indicating the page is being interacted with
    await this.page.keyboard.press('PageDown')
  }
}
