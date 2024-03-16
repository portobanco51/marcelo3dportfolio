export const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_API_KEY,
        'X-RapidAPI-Host': 'seo-open-graph-scraper.p.rapidapi.com'
    }
};

export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
    await new Promise((resolve) => setTimeout(resolve, 1500));
    return data
}