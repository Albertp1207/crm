export default (url,method,data) => {
    if( method === "GET") {
        return fetch(url).then(data=>data.json())
    } else {
        return fetch(url,{
            method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(data=>{data.json()})
    }
}