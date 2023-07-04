import { Card,Text, Button, Grid , Link, Row ,Textarea} from "@nextui-org/react";
import { Mail } from "../Login/Mail";

export default function Signup() {
  return (<Grid.Container >
    <Grid css={{margin: "$20 auto"}}>
    <Text
      h1
      size={60}
      css={{
        textGradient: "45deg, $blue600 -20%, $pink600 50%",
      }}
      weight="bold"
    >
      Let's
    </Text>
    <Text
      h1
      size={60}
      css={{
        textGradient: "45deg, $purple600 -20%, $pink600 100%",
      }}
      weight="bold"
    >
      Connect 
    </Text>
    <Text
      h1
      size={60}
      css={{
        textGradient: "45deg, $yellow600 -20%, $red600 100%",
      }}
      weight="bold"
    >
      Galgotian's
    </Text>
    </Grid>
   
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
          contentLeft={<Mail fill="currentColor" />}
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
  </Grid.Container>
  );
}