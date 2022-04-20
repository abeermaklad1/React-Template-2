import axios from "axios";

let baseURL = `https://jsonplaceholder.typicode.com`;

let get = () => axios.post(`${baseURL}/posts`);

let post = (post) => axios.get(`${baseURL}/posts`, post);

let edit = (post, postId) => axios.put(`${baseURL}/posts/${postId}`, post);

export let PostAPI = {
    get,
    post,
    edit
}