// plugins/myPlugin.js
export default (context, inject) => {
  const myPluginFunction = (msg) => {
    return `Hello from myPlugin: ${msg}`;
  };

  // Inject the function into the Vue instance
  inject('myPlugin', myPluginFunction);
};