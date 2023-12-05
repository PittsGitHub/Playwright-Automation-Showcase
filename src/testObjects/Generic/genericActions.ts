import { type Page } from '@playwright/test'

export class GenericActions {
  constructor(public readonly page: Page) {
    this.page = page
  }

  async genericGoto(url: string) {
    await this.page.goto(url)
    //Makes sure to get past lazy loading by indicating the page is being interacted with
    await this.page.keyboard.press('PageDown')
  }

  async genericGotoPreventImageLoading(url: string) {
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
    await this.page.goto(url)

    //Makes sure to get past lazy loading by indicating the page is being interacted with
    await this.page.keyboard.press('PageDown')
  }
}
