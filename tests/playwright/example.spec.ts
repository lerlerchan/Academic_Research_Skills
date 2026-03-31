import { test, expect } from '@playwright/test';

const SITE_URL = 'https://lerlerchan.github.io/Academic_Research_Skills/';

test('site is reachable and has expected title', async ({ page }) => {
  const resp = await page.goto(SITE_URL, { waitUntil: 'domcontentloaded' });
  expect(resp).not.toBeNull();
  if (resp) expect(resp.status()).toBeGreaterThanOrEqual(200);
  // Basic content checks
  await expect(page).toHaveTitle(/Academic Research Skills|Research Skills|Academic/i);
  await expect(page.locator('h1, header, .site-title').first()).toBeVisible();
});

test('claude-scholar skill page is reachable', async ({ page }) => {
  const resp = await page.goto(SITE_URL + 'skills/claude-scholar/', { waitUntil: 'domcontentloaded' });
  expect(resp).not.toBeNull();
  if (resp) expect(resp.status()).toBe(200);
  await expect(page.locator('h1').first()).toContainText('Claude Scholar');
});

test('uncommon-prompting skill page is reachable', async ({ page }) => {
  const resp = await page.goto(SITE_URL + 'skills/uncommon-prompting/', { waitUntil: 'domcontentloaded' });
  expect(resp).not.toBeNull();
  if (resp) expect(resp.status()).toBe(200);
  await expect(page.locator('h1').first()).toContainText('Uncommon Prompting');
});
