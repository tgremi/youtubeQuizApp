let get = {};

export const getVideo = (user) => {
    return fetch(`http://localhost:4000/videos`)
        .then(response => Promise.all([response, response.json()]))
}


// export default getUser; 