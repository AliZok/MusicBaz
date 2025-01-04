// composables/useAPI.js

export function useAPI() {
    const getData = async (endpoint, options = {}) => {
      const { data, pending, error } = await useFetch(endpoint, options)
      return { data, pending, error }
    }
  
    return { getData }
  }