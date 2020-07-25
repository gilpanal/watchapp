const API_KEY = "48ef1167e15f49af1e1c9e627854e7ef";
export const queryIMDB = async (query, page) => {

    const URL = `https://api.themoviedb.org/3/${query}api_key=${API_KEY}&language=en-US&page=${page}&include_adult=false`;

    let result = null
    try {
        await fetch(URL)
            .then((res) => res.json())
            .then((data) => {
                result = data
            });
    } catch (error) {
        result = error
    }
    return result
}