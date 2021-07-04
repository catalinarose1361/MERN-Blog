import React, { Component } from "react";
import { Grommet, Box, CardHeader, CardBody, CardFooter,TextInput, Button, TextArea } from "grommet"

function CreatePostForm(props) {
   console.log(props)
        return (
        <Grommet>
       <Box
  direction="row"
  
  fill={true}
  border={{ color: 'brand', size: 'large' }}
  pad="medium"
>
<form>

<TextInput
   placeholder="title"
   value={props.title}
   onChange={props.handleChange}
   name="title"
   />

    <TextInput 
   placeholder="author"
   value={props.author}
   onChange={props.handleChange}
   name="author"
   />

   <TextArea 
   placeholder="body"
   value={props.body}
  onChange={props.handleChange}
   name="body"
   />

   <TextInput
   format="mm/dd/yyyy"
   value={props.date}
   onChange={props.handleChange}
   name="date"
   placeholder="mm/dd/yyyy"
   />

   <Button onClick={props.addPost} primary label="Save Post" />

 </form>
</Box>
      
 <Box pad="small" background="dark-3" />
  <Box pad="medium" background="light-3" />

     
             
        </Grommet>
        )
    
  }

export default CreatePostForm
