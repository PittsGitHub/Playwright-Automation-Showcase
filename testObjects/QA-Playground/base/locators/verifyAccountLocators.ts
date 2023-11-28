import {type Page,type Locator} from '@playwright/test';

export class VerifyAccountLocators{
    
    readonly VerifyAccountURL: string
    readonly PinInput1: Locator
    readonly PinInput2: Locator
    readonly PinInput3: Locator
    readonly PinInput4: Locator
    readonly PinInput5: Locator
    readonly PinInput6: Locator
    readonly SuccessDisplay: Locator

    constructor(public readonly page:Page){
        this.page = page
        this.VerifyAccountURL = ('https://qaplayground.dev/apps/verify-account/')
        this.PinInput1 = page.locator('input:nth-child(1)') 
        this.PinInput2 = page.locator('input:nth-child(2)') 
        this.PinInput3 = page.locator('input:nth-child(3)')
        this.PinInput4 = page.locator('input:nth-child(4)')
        this.PinInput5 = page.locator('input:nth-child(5)')
        this.PinInput6 = page.locator('input:nth-child(6)')
        this.SuccessDisplay = page.getByText('Success')
    }
}