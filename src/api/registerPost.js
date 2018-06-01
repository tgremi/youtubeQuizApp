let POST = {};

POST.registerUser = async function (data, callback) {
    fetch('http://localhost:4000/register-user', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then((response) => response.json()
    ).then((res) => {
        callback(undefined, res);
    })
}


POST.elderlyDetails = (data, callback) => {
    fetch('http://localhost:4000/register-elderly', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then((response) => response.json()
    ).then((res) => {
        callback(undefined, res);
    })
}

export { POST }