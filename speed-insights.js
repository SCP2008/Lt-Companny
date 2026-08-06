// Vercel Speed Insights initialization
import { injectSpeedInsights } from './node_modules/@vercel/speed-insights/dist/index.mjs';

// Initialize Speed Insights
// This will automatically track web vitals and performance metrics
injectSpeedInsights({
  // Enable debug logging in development
  debug: false,
  // Optional: Set a custom sample rate (0-1). Default is 1 (100%)
  // sampleRate: 1,
  // Optional: Middleware to modify events before they're sent
  // beforeSend: (event) => event,
});
