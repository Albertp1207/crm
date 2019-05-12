const _URL = "http://visual.istclabz.com:2112/api";
export default (url,method,data) => {
    const URL = _URL + url
    // console.log(URL)
    if( method === "GET") {
        // console.log("Asdas")
        return fetch(URL)
            .then(verifyError)
            .then(data=>data.json())
    } else {
        return fetch(URL,{
            method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(verifyError)
        // then ... error to json ...
    }
}

function verifyError(res){
    if(!res.ok && res.statusText) {
        throw Error(res.statusText)
    }
    return res
}

// true post !!!
// fetch("http://visual.istclabz.com:2112/api/emaillists/update?id=2&flag=true", {
//     credentials: 'same-origin', 
//     method: 'PUT', 
//     body: JSON.stringify(["d1e4061d-64cf-404c-bb78-b47449e4103b"]), 
//     headers: new Headers({
//       'Content-Type': 'application/json'
//     }),
//   })
//   .then(response => response.json())
// 	.then(a=>console.log(a))