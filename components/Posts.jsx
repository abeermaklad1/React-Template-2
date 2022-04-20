import PostItem from "./PostItem";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Posts() {
  let [posts, setPosts] = useState([]);
  let getAllPosts = async () => {
    try {
      let response = await axios.get( 
        `https://jsonplaceholder.typicode.com/posts`
      );
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }

    //then && catch
    // axios.get(`https://jsonplaceholder.typicode.com/posts`)
    // .then((response) => {
    //     setPosts(response.data);
    // })
    // .catch((error) =>{
    //     console.log(error);
    // })
  };

  let login = async (post) =>{
      let response = await axios.post(`https://jsonplaceholder.typicode.com/posts`, post);
      console.log(response.data);
  }

  useEffect(() => {
    getAllPosts();
  }, []);
  return (
    <>
      <div className="alert alert-info p-5">
        {posts &&
          posts.map((post, index) => {
            return (
              <PostItem
                key={index}
                btnTitle={post.id}
                desc={post.body}
                title={post.title}
              />
            );
          })}
      </div>
    </>
  );
}
