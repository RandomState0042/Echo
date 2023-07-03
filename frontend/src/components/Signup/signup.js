import { Card,Text, Button, Link, Row ,Textarea} from "@nextui-org/react";

export default function Signup() {
  return (
    <Card css={{ mw: "400px",height:"24rem",margin: "$18 auto"}}>
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
          itemType="email"
        />
         <Textarea css={{margin:"0.2rem 2rem"}}
          label="Password"
          color="primary"
          placeholder="Enter your Password"
          minRows={1}
          itemType="password"
        />
         <Textarea css={{margin:"0.2rem 2rem"}}
          label="Confirm Password"
          color="primary"
          placeholder="Enter your Password"
          minRows={1}
          itemType="password"
        />
    </Card.Body>
    <Card.Divider />
    <Card.Footer>
      <Row justify="flex-end">
        <Button size="sm" as={Link} light href="/login">
          Login
        </Button>
        <Button size="sm">SignUp</Button>
      </Row>
    </Card.Footer>
  </Card>
  );
}