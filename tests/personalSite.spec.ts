import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('/personalSite');
    await expect(page).toHaveTitle(/Personal Site/);
    await expect(page.locator('.homeInfo h1')).toBeVisible();

})

test('Enter to main page', async ({ page }) => {
    await expect(page).toHaveTitle(/Personal Site/);
    await expect(page.locator('.profilePhoto > img')).toBeVisible()
    await expect(page.locator('.homeInfo > h1')).toHaveText(`I'm Tadeusz David Woźniak`)
});

test('Go to contact section', async ({ page }) => {
    await page.getByRole('button', { name: 'Get in touch' }).click()
    await page.waitForURL('**/#contact')
    await expect(page.locator('.contact form')).toBeInViewport()
    await expect(page.locator('.contact form')).toBeVisible()
    await expect(page.locator('.contact li')).toHaveCount(3)
})
test('Check default project', async ({ page }) => {
    await page.getByRole('listitem').filter({ hasText: 'Portfolio' }).click()
    await page.waitForURL('**/#portfolio')
    await expect(page.locator('.portfolioContainer')).toBeInViewport()
    await expect(page.locator('.portfolioContainer .project.active h2')).toHaveText('Lego Tinder Swiper')
})
test('Check skills', async ({ page }) => {
    await page.getByRole('listitem').filter({ hasText: 'Skills' }).click()
    await page.waitForURL('**/#skills')
    await expect(page.locator('.skillsContainer')).toBeInViewport()
    await expect(page.locator('.skill')).toHaveCount(9)
})
test('Check show more functionality', async ({ page }) => {
    await page.getByRole('listitem').filter({ hasText: 'More' }).click()
    for (const a of await page.locator('nav li:not(#showMore) a').all()) {
        await expect(a).toHaveClass('disabled')
        await expect(a).toHaveCSS('color', 'rgb(180, 212, 255)')
    }
    await expect(page.locator('nav #showMore a:not([hidden])')).toHaveText('Less')
    await expect(page.locator('.moreNavs a')).toBeVisible()
    await expect(page.locator('.moreNavs a')).toHaveText('Generatory')

})