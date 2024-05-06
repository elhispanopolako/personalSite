// Spec for genetatory.html
import { test, expect } from '@playwright/test';

const searchTests = [
    { searchText: 'Pesel', count: 8 },
    { searchText: 'dowód', count: 2 },
    { searchText: 'regon', count: 2 },
    { searchText: 'IBAN', count: 2 },
    { searchText: 'BIC', count: 1 },
    { searchText: 'WZON', count: 1 },

]

test.beforeEach(async ({ page }) => {
    await page.goto('/generatory.html');
    await expect(page).toHaveTitle(/Generatory testowe/);
    await expect(page.locator('h1')).toBeVisible();
})
searchTests.map((t) => {
    test(`Check search function with text: ${t.searchText}`, async ({ page }) => {
        await page.locator('#searchInput').pressSequentially(t.searchText)
        await expect(page.locator('.generatorContent .generatorContainer:not([style="display: none;"])')).toHaveCount(t.count)
    })
})
