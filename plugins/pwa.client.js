export default defineNuxtPlugin(async () => {
  if (process.env.NODE_ENV !== 'production') {
    if ('serviceWorker' in navigator) {
      const registrations = await navigator.serviceWorker.getRegistrations();
      for (const registration of registrations) {
        await registration.unregister();
      }
    }
    return;
  }

  // Production PWA logic here...
});