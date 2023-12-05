import { type Page } from '@playwright/test'
import { DynamicTablePageLocators } from '../locators/dynamicsTableLocators'
import { GenericActions } from 'testObjects/Generic/genericActions'

export class DynamicTablePage {
  readonly dynamicTablePageLocators: DynamicTablePageLocators
  readonly genericActions: GenericActions

  constructor(public readonly page: Page) {
    this.page = page
    this.dynamicTablePageLocators = new DynamicTablePageLocators(page)
    this.genericActions = new GenericActions(page)
  }
  async goto() {
    await this.genericActions.genericGotoPreventImageLoading(this.dynamicTablePageLocators.DynamicTableURL)
  }
}
