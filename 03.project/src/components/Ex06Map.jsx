import React from 'react'
import { Button, Card } from 'react-bootstrap'
import data from '../json/ex06data.json'
import '../style/ex06.css'

const Ex06Map = ({ item }) => {
  console.log(data);
  return (
    <Card key={item.title} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.imgSrc} height='350px' />
      <Card.Body>
        <Card.Title>
          {item.title} {item.birthYear}년생
        </Card.Title>
        <Card.Text>
          {item.content}
        </Card.Text>
        <a href={item.SNS}><Button variant="primary">instargram</Button></a>
      </Card.Body>
    </Card>
  )
}


export default Ex06Map