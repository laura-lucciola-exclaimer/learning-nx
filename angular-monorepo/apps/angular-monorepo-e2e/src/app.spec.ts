import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  expect(await page.locator('h1').first().innerText()).toContain('Welcome angular-monorepo');
});
