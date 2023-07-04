// import { Card,Text, Button,  Link,Row ,Textarea} from "@nextui-org/react";
import React from "react";
import { Modal, Input, Row, Checkbox, Button, Text, Link } from "@nextui-org/react";
import { Mail } from "./Mail";
import { Password } from "./Password";

export default function Login() {
  return (
    <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={true}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Welcome to
            <Text b size={18}>
              NextUI
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
            contentLeft={<Mail fill="currentColor" />}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Password"
            contentLeft={<Password fill="currentColor" />}
          />
          <Row justify="space-between">
            <Checkbox>
              <Text size={14}>Remember me</Text>
            </Checkbox>
            <Text size={14}>Forgot password?</Text>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" as={Link} href="/signup">
            Create new Account
          </Button>
          <Button auto >
            Sign in
          </Button>
        </Modal.Footer>
      </Modal>
  );
}