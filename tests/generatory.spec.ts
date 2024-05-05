// Spec for genetatory.html
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('./generatory.html');
    await expect(page).toHaveTitle(/Generatory testowe/);
    await expect(page.locator('h1')).toBeVisible();
})

test(`Check search function`, async ({ page }) => {
    await page.locator('#searchInput').fill('Pesel')
    await expect(page.locator('.generatorContent .generatorContainer:not([style="display: none;"])')).toHaveCount(8)
})