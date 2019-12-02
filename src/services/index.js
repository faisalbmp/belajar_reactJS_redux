import axios from 'axios'; 

const url = 'http://localhost:3000/posts';

const Get = (path)  => {
    const promise = new Promise((resolve, reject) => {
        axios.get(`${url}/${path}`)
        .then((res) => {
            // console.log('result from serviec',res.data);
            resolve('this is real');
        }, (err) => {
            reject(err);
        })
    })
    return promise;
}

const getNewsBlog = () => Get('?_sort=id&_order=desc');

const API = {
    getNewsBlog
}


export default API;