import './App.css';
import {useState, useEffect} from 'react'

function App() {

  //CONNECTING TO BACKEND DATA AND DISPLAYING THAT DATA ON THE FRONT END

  //1. using state which at first is empty but soon will store data collected from our MongoDB 

    //we are using an array of objects because state is saving multiple posts

  const [posts, setPosts] = useState([
    {
      title: " ",
      author: " ",
      body: " ",
      date: null,
    }
  ]);

  //fetch the data from /posts API and return a json

  useEffect(() => {

    fetch('/posts').then(res => {

      if(res.ok) {
        return res.json()
      }
      //set state equal to the json response
    }).then(jsonRes => setPosts(jsonRes))

  })

    

  return (
    <div className="App">
      
      {posts.map(post => {

        return (

          <div>
            <h1>{post.title}</h1>
            <h2>{post.author}</h2>
            <p>{post.body}</p>
            <p>{post.date}</p>
            <button>DELETE</button>
          </div>
        
        )

      })}

    </div>
  );
}

export default App;

// import {useState, useEffect} from 'react'

// import './App.css';

// function App() {
//   //using state which at first is empty but soon will store data collected from our MongoDB 
//   const [movies, setMovies] = useState([
//     {
//       title: " ",
//       genre: " ",
//       year: " "
//     }
//   ])
//   //fetch the data from the route and return a json
//   useEffect(() => {
//     fetch('/movies').then(res => {
//       if(res.ok) {
//         return res.json()
//       }
//       //take json response and set state equal to the json response
//     }).then(jsonRes => setMovies(jsonRes))
//   })

//   return (
//     <div className="App">

//       {movies.map(movie => {
//         return (
//           <div>
//             <h1>{movie.title}</h1>
//             <p>{movie.genre}</p>
//             <p>{movie.year}</p>
//             <button>DELETE</button>
//           </div>
        
//         )
//       })}

//     </div>
//   );
// }

// export default App;