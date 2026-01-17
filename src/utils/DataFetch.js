export const options = {
    method: 'POST',
    headers: {
        'X-Linkpreview-Api-Key': import.meta.env.VITE_REACT_APP_API_KEY,
        'mode': 'cors',
    }
};

export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
    await new Promise((resolve) => setTimeout(resolve, 100));
    return data
}
// export const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_API_KEY,
//         'X-RapidAPI-Host': 'link-previewer1.p.rapidapi.com'
//     }
// };

// export const fetchData = async (url, options) => {
//     const res = await fetch(url, options);
//     const data = await res.json();
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     return data
// }