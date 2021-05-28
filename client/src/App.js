import './App.css';
import {useState, useEffect} from 'react'
import axios from "axios";

function App() {

  

  //using state which at first is empty but soon will store data collected from our MongoDB 

    //we are using an array of objects because state is saving multiple posts

  const [posts, setPosts] = useState([
    {
      title: " ",
      author: " ",
      body: " ",
      date: null,
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
    //a preventDefault is called on the event when submitting the form to prevent a browser reload/refresh.
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
    <div className="App">

      <h1>Add Post</h1>

      <form>

        <input onChange={handleChange} name="title" value={post.title}></input>
        <input onChange={handleChange} name="author" value={post.author}></input>
        <input onChange={handleChange} name="body" value={post.body}></input>
        <input onChange={handleChange} name="date" value={post.date}></input>
        <button onClick={addPost}>ADD POST</button>
      </form>
      {posts.map(post => {

        return (

          <form>
            <h1>{post.title}</h1>
            <h2>{post.author}</h2>
            <p>{post.body}</p>
            <p>{post.date}</p>
            
            <button onClick={() => deletePost(post._id)}>DELETE</button>
          </form>
        
        )

      })}

    </div>
  );
}

export default App;
