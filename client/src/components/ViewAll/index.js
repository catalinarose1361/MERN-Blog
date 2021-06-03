import React, { Component } from "react";
import { Grommet, Button } from "grommet"


function ViewAll(props)  {
  console.log("viewAll", props)
  
    
   

      
  
          return(

            <Grommet>

              <h1>{props.title}</h1>
              <h2>{props.author}</h2>
              <p>{props.body}</p>
              <p>{props.date}</p>
              <Button onClick={() => props.deletePost(props.id._id)} label="Delete Post" />
            
            </Grommet>
          )
       
      
    
  }

export default ViewAll
