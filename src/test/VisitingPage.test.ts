import { test, expect } from '@playwright/test';


test('Page Visiting Test', async ({ page }) => {
test('Visiting the CalculatorPlus', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Calculator Plus' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Created By Eesa and tested by' })).toBeVisible();
  await page.close();
});
});