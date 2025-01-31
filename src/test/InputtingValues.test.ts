import { test, expect } from '@playwright/test';

test.describe('Calculator Functionality Tests', () => {

    test('should add two numbers correctly', async ({ page }) => {
        await page.goto('/');  // Ensure you're visiting the correct URL
      
        // Perform addition: 1 + 2
        await page.getByRole('button', { name: '1' }).click();
        await page.getByRole('button', { name: '+' }).click();
        await page.getByRole('button', { name: '2' }).click();
        await page.getByRole('button', { name: '=' }).click();
        const result = await page.locator('//input[@name="DISPLAY"]').inputValue(); 
        console.log(`Result from DISPLAY input: "${result}"`);

        expect(result.trim()).toBe('3');  // Ensure the value is '3'
        await page.getByRole('button', { name: 'AC' }).click();
        page.close();
      });

  test('should subtract two numbers correctly', async ({ page }) => {
    await page.goto('/'); 

    // Perform subtraction: 5 - 3
    await page.getByRole('button', { name: '5' }).click();
    await page.getByRole('button', { name: '-' }).click();
    await page.getByRole('button', { name: '3' }).click();
    await page.getByRole('button', { name: '=' }).click();
    const result = await page.locator('//input[@name="DISPLAY"]').inputValue(); 
    console.log(`Result from DISPLAY input: "${result}"`);

    expect(result.trim()).toBe('2'); //ensure the value is '2'
    await page.getByRole('button', { name: 'AC' }).click();
    page.close();
  });

  test('should multiply two numbers correctly', async ({ page }) => {
    await page.goto('/');  

    // Perform multiplication: 3 * 4
    await page.getByRole('button', { name: '3' }).click();
    await page.getByRole('button', { name: '*' }).click();
    await page.getByRole('button', { name: '4' }).click();
    await page.getByRole('button', { name: '=' }).click();
    const result = await page.locator('//input[@name="DISPLAY"]').inputValue(); 
    console.log(`Result from DISPLAY input: "${result}"`);

    expect(result.trim()).toBe('12'); //ensure the value is '12'
    await page.getByRole('button', { name: 'AC' }).click();
    page.close();
  });

  test('should divide two numbers correctly', async ({ page }) => {
    await page.goto('/');  

    // Perform division: 6 / 2
    await page.getByRole('button', { name: '6' }).click();
    await page.getByRole('button', { name: '/' }).click();
    await page.getByRole('button', { name: '2' }).click();
    await page.getByRole('button', { name: '=' }).click();
    const result = await page.locator('//input[@name="DISPLAY"]').inputValue(); 
    console.log(`Result from DISPLAY input: "${result}"`);

    expect(result.trim()).toBe('3'); //ensure the value is '3'
    await page.getByRole('button', { name: 'AC' }).click();
    page.close();
  });

});