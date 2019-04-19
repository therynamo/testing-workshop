describe('Google', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000');
  });

  it('title of the page should be `Testing Fun`', async () => {
    await expect(await page.title()).toEqual('Testing Fun');
  });
});
