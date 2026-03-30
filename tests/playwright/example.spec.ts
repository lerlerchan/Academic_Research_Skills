import { test, expect } from '@playwright/test';

const SITE_URL = 'https://lerlerchan.github.io/academic_research_skills/';

test('site is reachable and has expected title', async ({ page }) => {
  const resp = await page.goto(SITE_URL, { waitUntil: 'domcontentloaded' });
  expect(resp).not.toBeNull();
  if (resp) expect(resp.status()).toBeGreaterThanOrEqual(200);
  // Basic content checks
  await expect(page).toHaveTitle(/Academic Research Skills|Research Skills|Academic/i);
  await expect(page.locator('h1, header, .site-title')).toHaveCountGreaterThan(0);
});
