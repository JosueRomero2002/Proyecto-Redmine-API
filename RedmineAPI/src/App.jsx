
import React, { useEffect, useState } from "react";

import { Container,Card,Row,Col} from "react-bootstrap";
import ReactDOM from 'react-dom';
import './styles.css';


import { Form, ButtonToolbar, Button, Input } from 'rsuite';




const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Container>
      <Card className="CSSInput card-transparent-border" style={{ width: "100%", backgroundColor: "transparent" }}>
  <Form>
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ flex: 1, marginRight: "10px" }}>
        <Form.Group controlId="name">
          <Form.ControlLabel>Username</Form.ControlLabel>
          <Form.Control name="name" />
          <Form.HelpText>Username is required</Form.HelpText>
        </Form.Group>
      </div>
      <div style={{ flex: 1, marginLeft: "10px" }}>
        <Form.Group controlId="email">
          <Form.ControlLabel>Email</Form.ControlLabel>
          <Form.Control name="email" type="email" />
          <Form.HelpText tooltip>Email is required</Form.HelpText>
        </Form.Group>
      </div>
    </div>
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ flex: 1, marginRight: "10px" }}>
        <Form.Group controlId="password">
          <Form.ControlLabel>Password</Form.ControlLabel>
          <Form.Control name="password" type="password" autoComplete="off" />
        </Form.Group>
      </div>
      <div style={{ flex: 1, marginLeft: "10px" }}>
        <Form.Group controlId="textarea">
          <Form.ControlLabel>Textarea</Form.ControlLabel>
          <Form.Control rows={5} name="textarea" accepter={Textarea} />
        </Form.Group>
      </div>
    </div>
 





    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ flex: 1 }}>
        {/* Add more input fields on the left */}
      </div>
      <div style={{ flex: 1 }}>
        {/* Add more input fields on the right */}
      </div>
    </div>




    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ flex: 1 }}>
        {/* Add more input fields on the left */}
      </div>
      <div style={{ flex: 1 }}>

      </div>
    </div>


    <p style={{ marginBottom: "80px" }}></p>
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
      <Form.Group>
        <ButtonToolbar>
          <Button appearance="primary">Enviar Ticket</Button>
          <Button appearance="default">Cancelar</Button>
        </ButtonToolbar>
      </Form.Group>
    </div>
   
  </Form>
</Card>



      </Container>

    </>
  )
}

export default App
