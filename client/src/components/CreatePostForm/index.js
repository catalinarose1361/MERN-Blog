import React, { Component } from "react";
import { Grommet, TextInput, Button, TextArea } from "grommet"

function CreatePostForm(props) {
   console.log(props)
        return (
        <Grommet>
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
          />

          <Button onClick={props.addPost} primary label="Save Post" />

        </form>
        </Grommet>
        )
    
  }

export default CreatePostForm
// {/* <h1>Add Post</h1> */}

//         <form>

//           <TextInput
//           placeholder="title"
//           value={post.title}
//           onChange={handleChange}
//           name="title"
//           />

//           <TextInput
//           placeholder="author"
//           value={post.author}
//           onChange={handleChange}
//           name="author"
//           />

//           <TextArea
//           placeholder="body"
//           value={post.body}
//           onChange={handleChange}
//           name="body"
//           />

//           <TextInput
//           format="mm/dd/yyyy"
//           value={post.date}
//           onChange={handleChange}
//           name="date"
//           />

//           <Button onClick={addPost} primary label="Save Post" />

//         </form>