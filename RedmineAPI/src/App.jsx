import { useState } from 'react'
import { Col, Button, Row, Card, Form, Carousel, Container} from "react-bootstrap";



import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Container>
      <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>

<Button>Enviar Ticket</Button>
      </Container>

    </>
  )
}

export default App
