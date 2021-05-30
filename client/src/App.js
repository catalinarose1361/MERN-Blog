
import {React, useState, useEffect} from 'react'
import axios from "axios";
import { Grommet, Button, TextInput, TextArea } from 'grommet';

function App() {
  
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

  //setting state variable to hold user entered data
  //note the single object 
  const [post, setPost] = useState(
    {
      title: " ",
      author: " ",
      body: " ",
      date: " ",
    }
  );

//CONNECTING TO BACKEND DATA AND DISPLAYING THAT DATA ON THE FRONT END

//fetch the data from /posts API and return a json
  useEffect(() => {

    fetch('/posts').then(res => {

      if(res.ok) {
        return res.json()
      }

      //set state equal to the json response
    }).then(jsonRes => setPosts(jsonRes))
  });

  //POSTING NEW DATA TO THE BACKEND
  
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
    axios.post('/newPost', newPost)
  }

  // REMOVING POST DATA FROM MONGODB
  function deletePost(id){
    axios.delete('/delete/' + id)
    alert("Post Removed")
  }
  
  // input names are required to parse from body req in our server
  //value is set to whatever value was saved in state variable post
  return (
    <Grommet plain>
    

        <h1>Add Post</h1>

        <form>

          <TextInput
          placeholder="title"
          value={post.title}
          onChange={handleChange}
          name="title"
          />

          <TextInput
          placeholder="author"
          value={post.author}
          onChange={handleChange}
          name="author"
          />

          <TextArea
          placeholder="body"
          value={post.body}
          onChange={handleChange}
          name="body"
          />

          <TextInput
          format="mm/dd/yyyy"
          value={post.date}
          onChange={handleChange}
          name="date"
          />

          <Button onClick={addPost} primary label="Save Post" />

        </form>

        {posts.map(post => {

          return (

            <div>

              <h1>{post.title}</h1>
              <h2>{post.author}</h2>
              <p>{post.body}</p>
              <p>{post.date}</p>
              <Button onClick={() => deletePost(post._id)} label="Delete Post" />
            
            </div>
          )
        })}
      
    </Grommet>
  );
}

export default App;
