// export function useAPI() {
//   const loadingGetApi = ref(false)

//   const getData = async (endpoint, options = {}) => {

//     loadingGetApi.value = true
//     const { data, error } = await useFetch(endpoint, options)
//     loadingGetApi.value = false
//     return { data, error, loadingGetApi }
//   }

//   return { getData }
// }

export function useAPI () {
  const loadingGetApi = ref(false)
  const loadingPostApi = ref(false)
  const loadingDeleteApi = ref(false)

  const getData = async (endpoint, options = {}) => {
    loadingGetApi.value = true

    try {
      const data = await $fetch(endpoint, options)
      return { data }
    } catch (error) {
      console.error('Error GET data:', error)
      return { data: null, error: error.message }
    } finally {
      loadingGetApi.value = false
    }
  }

  const getDataServerSide = async (endpoint, options = {}) => {
    loadingGetApi.value = true
    const { data, error } = await useFetch(endpoint, options)
    loadingGetApi.value = false
    return { data, error }
  }

  const postData = async (endpoint, payload, options = {}) => {
    loadingPostApi.value = true

    try {
      const data = await $fetch(endpoint, {
        method: 'POST',
        body: payload,
        ...options
      })
      return { data }
    } catch (error) {
      console.error('Error POST data:', error)
      return { data: null, error: error.message }
    } finally {
      loadingPostApi.value = false
    }
  }

  const updateData = async (endpoint, payload, options = {}) => {
    loadingPostApi.value = true

    try {
      const data = await $fetch(endpoint, {
        method: 'PUT',
        body: payload,
        ...options
      })
      return { data }
    } catch (error) {
      console.error('Error UPDATE data:', error)
      return { data: null, error: error.message }
    } finally {
      loadingPostApi.value = false
    }
  }

  const deleteData = async (endpoint, options = {}) => {
    loadingDeleteApi.value = true

    try {
      const response = await $fetch(endpoint, {
        method: 'DELETE',
        ...options
      })
      return { data: response }
    } catch (error) {
      console.error('Error deleting data:', error)
      return { data: null, error: error.message }
    } finally {
      loadingDeleteApi.value = false
    }
  }

  return {
    getData,
    loadingGetApi,
    postData,
    updateData,
    deleteData,
    getDataServerSide,
  }
}
