import { React, useState, useEffect } from "react";
import CreatePostForm from "../components/CreatePostForm";
import axios from "axios"

const CreatePost = () => {
  //setting state variable to hold user entered data
//   //note the single object 
  const [post, setPost] = useState(
    {
      title: " ",
      author: " ",
      body: " ",
      date: " ",
    }
  );

 //handleChange tracks what is being typed 
// 'e' has two peices of data, the name and value of inputs
  function handleChange(e) {

    const {name, value} = e.target;

    setPost(prevInput => {

      return(
        {
          ...prevInput,
          [name]: value
        }
      )
    })
  }
  

    //addPost function
  function addPost(e) {

    //a preventDefault is called on the event when 
    //submitting the form to prevent a browser reload/refresh.
    e.preventDefault();

    //gets value from state variable post
    const newPost = {
      title: post.title,
      author: post.author,
      body: post.body,
      date: post.date
    }

    //posts newPost variable to proxy 
    axios.post('/newPost', newPost);
   
  }

    return (
        <CreatePostForm
         post={post} 
         handleChange={handleChange}
         addPost={addPost}/>
    )
};

export default CreatePost