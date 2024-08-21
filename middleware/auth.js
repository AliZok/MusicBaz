// middleware/auth.js
export default defineNuxtRouteMiddleware((to, from) => {
    // Your authentication logic here
    const isAuthenticated = false; // Replace with your actual logic
  
    if (!isAuthenticated) {
      return navigateTo('/login'); // Redirect to login if not authenticated
    }
  });