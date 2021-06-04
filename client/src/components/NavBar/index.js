import React from "react";
import { Grommet, Button, Header, Icons } from "grommet";
import { Grommet as GrommetIcon, Menu as MenuIcon } from 'grommet-icons';
function NavBar() {
    return (
        <Grommet>
        <Header background="brand">
  <Button href={"/"} label={"View Posts"} hoverIndicator />
  <Button href={"createPost"} label={"Create Post"} hoverIndicator />
  
</Header>
</Grommet>
    )
}

export default NavBar