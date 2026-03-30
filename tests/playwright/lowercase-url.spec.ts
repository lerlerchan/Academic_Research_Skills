import { test, expect } from '@playwright/test';

const LOWER_URL = 'https://lerlerchan.github.io/academic_research_skills/';

test('lowercase pages URL returns 200', async ({ request }) => {
  const resp = await request.get(LOWER_URL);
  expect(resp.status()).toBe(200);
});
