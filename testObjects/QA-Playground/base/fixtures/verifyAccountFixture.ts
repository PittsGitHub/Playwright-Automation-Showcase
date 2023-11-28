import { test as base } from '@playwright/test';
import { VerifyAccountPage } from '../pages/verifyAccount.page';

type VerifyAccountFixture = {
    verifyAccountFixture: VerifyAccountPage;
  };

  export const test = base.extend<VerifyAccountFixture>({
    verifyAccountFixture: async ({ page }, use) => {
      const dynamicTablePage = new VerifyAccountPage(page);
      
      await dynamicTablePage.goto();
      await use(dynamicTablePage);
    },
  
  })
  
  export { expect } from '@playwright/test';