import React from 'react'
import { Card  } from "react-bootstrap"

const ServiciosCard = ({title, image, body}) => {
  return (
    <Card className="service-card">
            <Card.Header as="h5" className="text-center service-card-title">
              {title}
            </Card.Header>
            <Card.Img
              variant="top"
              src={image}
              className="service-card-picture"
            />
            <Card.Body className="service-card-body">
              <Card.Text>
                {body}
              </Card.Text>
            </Card.Body>
          </Card>
  )
}

export default ServiciosCard