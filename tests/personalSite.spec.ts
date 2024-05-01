import { test, expect } from '@playwright/test';

test('Enter to main page', async ({ page }) => {
    await page.goto('/personalSite');
    await expect(page).toHaveTitle(/Personal Site/);
    await expect(page.locator('.profilePhoto > img')).toBeVisible()
    await expect(page.locator('.homeInfo > h1')).toHaveText(`I'm Tadeusz David Woźniak`)

});
