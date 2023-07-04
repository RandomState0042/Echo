import React from "react";

import { Navbar, Button, Link, Text } from "@nextui-org/react";
import { Layout } from "./Layout.js";

const Header = () => {
  return (<Layout>
    <Navbar isCompactisBordered variant="floating">
      <Navbar.Brand>
        <Text b h1  hideIn="xs" as={Link} href="/" size={30}
        css={{
          textGradient: "45deg, $purple600 -20%, $pink600 100%",
        }}>
          Echo
        </Text>
      </Navbar.Brand>
      <Navbar.Content>
        <Navbar.Link color="inherit" href="/login">
          Login
        </Navbar.Link>
        <Navbar.Item>
          <Button auto flat as={Link} href="/signup">
            Sign Up
          </Button>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  </Layout>
  )

};

export default Header;