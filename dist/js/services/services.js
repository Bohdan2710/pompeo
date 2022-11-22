async function getDataProduct(url) {
    const res = await fetch(url);
    return res.json();
}

async function handlingPostPomp(url, method, json) {
    const res = await fetch(url, {
        method: method,
        headers: {
            "Content-type": "application/json"
        },
        body: json
    });

    return res.json();
}

export { getDataProduct };
export { handlingPostPomp };


