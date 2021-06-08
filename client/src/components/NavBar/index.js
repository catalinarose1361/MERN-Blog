import React from "react";
import { Grommet, Button, Header, Nav, Icon, Anchor } from "grommet";
import { FormDown, Book, Edit, Slack } from 'grommet-icons';
function NavBar() {
    return (
        <Grommet>
            <Nav alignSelf="center" direction="row" background="brand" pad="medium">
    <Anchor  href={"/createPost"} icon={<Edit size="large" />} hoverIndicator />
   
    <Anchor href={"/"} icon={<Book size="large" />} hoverIndicator />
</Nav>
        {/* <Header background="brand">
  <Button href={"/"} label={"View Posts"} hoverIndicator />
  <Button href={"/createPost"} label={"Create Post"} hoverIndicator />
  
</Header> */}
</Grommet>
    )
}

export default NavBar