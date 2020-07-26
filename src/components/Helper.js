
export const queryIMDB = async (query, page) => {
  const API_KEY = process.env.REACT_APP_API_KEY
  const URL = `https://api.themoviedb.org/3/${query}api_key=${API_KEY}&language=en-US&page=${page}&include_adult=false`

  let result = null
  try {
    await fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        result = data
      })
  } catch (error) {
    result = { error: error || 'Unknown error' }
  }
  return result
}
