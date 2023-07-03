import React from "react";

import { Navbar, Button, Link, Text } from "@nextui-org/react";
import { Layout } from "./Layout.js";

const Header = () => {
  return (<Layout>
    <Navbar isCompactisBordered variant="floating">
      <Navbar.Brand>
        <Text b color="inherit" hideIn="xs" as={Link} href="/">
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