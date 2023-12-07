import { test, expect } from '@playwright/test'

test('Then status should be expected', async ({ request }) => {
  const response = await request.get('https://automationintesting.online/booking/summary?roomid=1')
  const expectedStatus = 200

  expect(response.status()).toBe(expectedStatus)
})
