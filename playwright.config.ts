import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/test',
    use: {
    baseURL: 'http://127.0.0.1:5500/index.html',  // Add your base URL here
    // Other options like viewport size, etc. can be configured here
  },
  projects: [
    {
      name: 'Desktop Chrome',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});