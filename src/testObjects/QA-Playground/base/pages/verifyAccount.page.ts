import { type Page } from '@playwright/test'
import { VerifyAccountLocators } from '../locators/verifyAccountLocators'
import { GenericActions } from 'testObjects/Generic/genericActions'

export class VerifyAccountPage {
  readonly verifyAccountLocators: VerifyAccountLocators
  readonly genericActions: GenericActions

  constructor(public readonly page: Page) {
    this.page = page
    this.verifyAccountLocators = new VerifyAccountLocators(page)
    this.genericActions = new GenericActions(page)
  }

  async goto() {
    await this.genericActions.genericGotoPreventImageLoading(this.verifyAccountLocators.VerifyAccountURL)
  }
}
