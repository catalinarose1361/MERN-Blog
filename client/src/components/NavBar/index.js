import React from "react";
import { Grommet, Button, Header, Icons } from "grommet";
import { Grommet as GrommetIcon, Menu as MenuIcon } from 'grommet-icons';
function NavBar() {
    return (
        <Grommet>
        <Header background="brand">
  <Button href={"/"}  hoverIndicator />
  <Button href={"createPost"}  hoverIndicator />
  
</Header>
</Grommet>
    )
}

export default NavBar