import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Button } from "grommet"

function ViewAll(props) {

  // console.log("viewAll", props)
  
  return(

    <Card  height="large" width="large" background="light-1">

      <CardHeader pad="medium">{props.title}</CardHeader>

      <CardBody pad="medium">

        <h2>{props.author}</h2>
        <p>{props.body}</p>
        <p>{props.date}</p>

       

      </CardBody>

      <CardFooter pad={{horizontal: "small"}} background="light-2">
        
        <Button onClick={() => props.deletePost(props.id)} label="Delete Post" alignSelf="center"
 />
        
      </CardFooter>

    </Card>
  )   
}

export default ViewAll
