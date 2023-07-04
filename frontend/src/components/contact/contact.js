import { Card,Text, Button,  Link,Row ,Textarea} from "@nextui-org/react";

export default function Contact() {
  return (
    <Card css={{ mw: "400px",height:"22rem",margin: "$18 auto"}}>
    <Card.Header css={{alignContent:"center"}}>
      <Text b>Login</Text>
    </Card.Header>
    <Card.Divider />
    <Card.Body >
    <Textarea css={{margin:"1rem 2rem"}}
          label="Email"
          placeholder="Enter your Email"
          color="primary"
          minRows={1}
        />
         <Textarea css={{margin:"0.2rem 2rem"}}
          label="Password"
          color="primary"
          placeholder="Enter your Password"
          minRows={1}
        />
        <Textarea css={{margin:"0.2rem 2rem"}}
          label="Password"
          color="primary"
          placeholder="Enter your Password"
          minRows={1}
        />
    </Card.Body>
    <Card.Divider />
    <Card.Footer>
      <Row justify="flex-end">
        <Button size="sm" auto as={Link} light href="/signup">
          Create New Account
        </Button>
        <Button size="sm" auto >Login</Button>
      </Row>
    </Card.Footer>
  </Card>
  );
}