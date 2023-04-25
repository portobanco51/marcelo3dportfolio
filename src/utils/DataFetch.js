export const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_API_KEY,
        'X-RapidAPI-Host': 'og-link-preview.p.rapidapi.com'
    }
};

export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
    return data
}