import React from "react";
import { Grommet, Button, Header, Nav, Icon, Anchor, Text, Footer } from "grommet";
import { FormDown, Github, Edit, Slack } from 'grommet-icons';
function FooterComp() {
    return(
        <Grommet>
            <Footer background="brand" pad="medium">
  <Text>Application Developed By Catalina Williams</Text>
  <Anchor icon={<Github size="large" />} />
</Footer>
        </Grommet>
    )

}

export default FooterComp