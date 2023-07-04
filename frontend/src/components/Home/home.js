import { Card, Grid, Row, Text } from "@nextui-org/react";
import "./home.css"
export default function Home() {
  const list = [
    {
      title: "Orange",
      img: "/images/fruit-1.jpeg",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "/images/fruit-2.jpeg",
      price: "$3.00",
    },
    {
      title: "Cherry",
      img: "/images/fruit-3.jpeg",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "/images/fruit-4.jpeg",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "/images/fruit-5.jpeg",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "/images/fruit-6.jpeg",
      price: "$8.00",
    },
    {
      title: "Banana",
      img: "/images/fruit-7.jpeg",
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: "/images/fruit-8.jpeg",
      price: "$12.20",
    },
    {
        title: "Orange",
        img: "/images/fruit-1.jpeg",
        price: "$5.50",
      },
      {
        title: "Tangerine",
        img: "/images/fruit-2.jpeg",
        price: "$3.00",
      },
      {
        title: "Cherry",
        img: "/images/fruit-3.jpeg",
        price: "$10.00",
      },
      {
        title: "Lemon",
        img: "/images/fruit-4.jpeg",
        price: "$5.30",
      },
      {
        title: "Avocado",
        img: "/images/fruit-5.jpeg",
        price: "$15.70",
      },
      {
        title: "Lemon 2",
        img: "/images/fruit-6.jpeg",
        price: "$8.00",
      },
      {
        title: "Banana",
        img: "/images/fruit-7.jpeg",
        price: "$7.50",
      },
      {
        title: "Watermelon",
        img: "/images/fruit-8.jpeg",
        price: "$12.20",
      },
  ];

  return (
    <div>
      <div className="heading">
      <Text
        h1
        size={60}
        css={{
          textGradient: "45deg, $yellow600 -20%, $red600 100%",
        }}
        weight="bold"
      >
        Galgotias Club 
      </Text>
      </div>
      <Grid.Container gap={4} justify="flex-start">
      {list.map((item, index) => (
        <Grid xs={6} sm={4} key={index}>
          <Card isPressable css={{ margin:"1rem 1.1rem"}}>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={"https://nextui.org" + item.img}
                objectFit="cover"
                width="100%"
                height={220}
                alt={item.title}
              />
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start" }}>
              <Row wrap="wrap" justify="center" align="center" >
                <Text b>{item.title}</Text>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
    </div>
  );
}
