

function myaxios(method, url, body = null){
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();


    xhr.open(method, url);
    xhr.responseType='json';
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = () =>{
        if(xhr.status >= 400){
            reject(xhr.response);
            //console.log('failed');
        }
        else{
            resolve(xhr.response);
            //console.log(xhr.response);
        }
    }
    
    xhr.onerror = () => {
        reject(xhr.response);
        //console.log('Error !')
    }
    xhr.send(JSON.stringify(body));
    })
}

const url='https://jsonplaceholder.typicode.com/users';

//myaxios('GET', url);

myaxios('POST', url, {
    name: 'Neha',
    job: 'Software Developers'
}).then((res)=> {
    console.log('Message from then block', res)
}).catch((err)=>{

});
