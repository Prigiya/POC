const url='https://jsonplaceholder.typicode.com/users';


function myaxios(method, url, body = null){
    const headers = {
        'Content-Type': 'application/json',
    }
    return fetch(url, {
        method: method,
        headers: headers,
        body: JSON.stringify(body)
    }).then((res)=>res.json());
}

myaxios('POST', url, {name:'Neha', Job:' developer'}).then((res)=>{
    console.log(res);
}).catch(err=>{
console.log(err);
})