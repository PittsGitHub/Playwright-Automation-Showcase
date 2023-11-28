import { type Page } from '@playwright/test';
import { DynamicTablePageLocators } from '../locators/dynamicsTableLocators';

export class DynamicTablePage {
    readonly dynamicTablePageLocators: DynamicTablePageLocators
    
    constructor(public readonly page:Page){
        this.page = page
        this.dynamicTablePageLocators = new DynamicTablePageLocators(page)
    }

    async goto(){
        //Prevents images loading when loading page as they are causing tests to fail
        //Also speeds up testing significantly
        await this.page.route('**/*', route => {
            return route.request().resourceType().match(/(image)s?/) ?
                route.abort() : route.continue();
          });

        await this.page.goto(this.dynamicTablePageLocators.DynamicTableURL)

        //Makes sure to get past lazy loading by indicating the page is being interacted with
        await this.page.keyboard.press('PageDown')
    }
}