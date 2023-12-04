import { test as base } from '@playwright/test'
import { DynamicTablePage } from '../pages/dynamicTable.page'

type DynamicTableFixture = {
  dynamicTableFixture: DynamicTablePage
}

export const test = base.extend<DynamicTableFixture>({
  dynamicTableFixture: async ({ page }, use) => {
    const dynamicTablePage = new DynamicTablePage(page)

    await dynamicTablePage.goto()
    await use(dynamicTablePage)
  },
})

export { expect } from '@playwright/test'
