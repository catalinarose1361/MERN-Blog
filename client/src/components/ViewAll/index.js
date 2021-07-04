import React from "react";
import { Grommet, Card, CardHeader, CardBody, CardFooter, Button, Grid } from "grommet"

function ViewAll(props)  {

  console.log("viewAll", props)
  
  return(

   


<Card  height="medium" width="medium" background="light-1">

<CardHeader pad="medium">{props.title}</CardHeader>

<CardBody pad="medium">

  <h2>{props.author}</h2>
  <p>{props.body}</p>
  <p>{props.date}</p>

  <Button onClick={() => props.deletePost(props.id)} label="Delete Post" />

</CardBody>

<CardFooter pad={{horizontal: "small"}} background="light-2"></CardFooter>

</Card>



 
              
   
  )   
}

export default ViewAll
