import { React, useState, useEffect } from "react";
import ViewAll from "../components/ViewAll";
import axios from "axios"
import { Grommet, Button } from "grommet";


const AllPosts = () => {
  
 //using state which at first is empty but soon will store data collected from our MongoDB 
 //we are using an array of objects because state is saving multiple posts
  const [posts, setPosts] = useState([
    {
      title: " ",
      author: " ",
      body: " ",
      date: " ",
    }
  ]);

  // //fetch the data from /posts API and return a json
  useEffect(() => {

    fetch('/posts').then(res => {

      if(res.ok) {
        return res.json()
      } else {
        alert("cannot get posts from mongoDB")
      }

    //set state equal to the json response
    }).then(jsonRes => setPosts(jsonRes))
  });

  //   // REMOVING POST DATA FROM MONGODB
  function deletePost(id){
    axios.delete('/delete/' + id)
    alert("Post Removed")
  }
  return(
    <Grommet>
  {posts.map(post => {
  
    return (
      <ViewAll
        title={post.title}
        author={post.author}
        body={post.body}
        date={post.date}
        id={post._id}
        deletePost={deletePost}



      />
      //   <div>
      // <h1>{post.title}</h1>
      // <h2>{post.author}</h2>
      // <p>{post.body}</p>
      // <p>{post.date}</p>
      // <Button onClick={() => deletePost(post._id)} label="Delete Post" />
      // </div>
      
    )
  
  })}
  </Grommet>
  )
  
};

export default AllPosts