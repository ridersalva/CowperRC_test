import React from 'react';
import { Button,Form } from 'react-bootstrap';
import './Contact_Form.css';

function Contact_Form() {
  return (
      <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Text>
                Gracias por contactar con nosotros escribenos con tus 
                dudas y preguntas y te responderemos lo antes posible
            </Form.Text>
            <br/>
              <Form.Label>Introduce tu Email</Form.Label>
              <Form.Control type="email" placeholder="Email" />
              <Form.Text className="text-muted">
                 Gracias por contactar con nosotros
              </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label> Cuentanos</Form.Label>
              <Form.Control className='textBox' type="text"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button className='summit' type="submit">
              Enviar
          </Button>
      </Form>
  )
}

export default Contact_Form