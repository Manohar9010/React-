import React from 'react'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap'

export default function CradCom(props) {
  return (
    <div><Card
    style={{
      width: '18rem'
    }}
  >
    <img
      alt="Sample"
      src="https://picsum.photos/300/200"
    />
    <CardBody>
      <CardTitle tag="h5">
        {props?.name}
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
       Price:{props.price}
      </CardSubtitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
      discountPercentage= {props.disc}
      </CardSubtitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
      after discount amount= {props.price-props.after}
      </CardSubtitle>
      <CardText>
       {props?.description}
      </CardText>
      <Button color="danger" className='w-100'>
        Button
      </Button>
    </CardBody>
  </Card></div>
  )
}
