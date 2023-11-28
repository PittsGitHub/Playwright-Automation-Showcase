import {type Page,type Locator} from '@playwright/test';

export class DynamicTablePageLocators{
    
    readonly DynamicTableURL: string
    readonly SpiderManRowLocator : Locator
    readonly IronManRowLocator : Locator
    readonly DoctorStrangeRowLocator : Locator
    readonly DeadpoolRowLocator : Locator
    readonly CaptainAmericaRowLocator : Locator
    readonly AntManRowLocator : Locator
    readonly HulkRowLocator : Locator
    readonly BlackWidowRowLocator : Locator

    constructor(public readonly page:Page){
        this.page = page
        this.DynamicTableURL = ('https://qaplayground.dev/apps/dynamic-table/')
        this.SpiderManRowLocator = page.locator("tr:has-text('Spider-Man')")
        this.IronManRowLocator = page.locator("tr:has-text('Iron Man')")
        this.DoctorStrangeRowLocator = page.locator("tr:has-text('Doctor Strange')")
        this.DeadpoolRowLocator = page.locator("tr:has-text('Deadpool')")
        this.CaptainAmericaRowLocator = page.locator("tr:has-text('Captain America')")
        this.AntManRowLocator = page.locator("tr:has-text('Ant-Man')")
        this.HulkRowLocator = page.locator("tr:has-text('Hulk')")
        this.BlackWidowRowLocator = page.locator("tr:has-text('Black Widow')")
    }
}