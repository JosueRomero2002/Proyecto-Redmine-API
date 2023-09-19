
import React, { useEffect, useState } from "react";

import { Container,Card,Row,Col} from "react-bootstrap";
import ReactDOM from 'react-dom';
import './styles.css';
import './App.css'
import { Form, ButtonToolbar, Button, Input,Dropdown ,DatePicker  } from 'rsuite';




const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);










function App() {
  const [count, setCount] = useState(0)
  const [StatusDropDownTitle, setStatusDropDownTitle] = useState("Select")
  const [PriorityDropDownTitle, setPriorityDropDownTitle] = useState("Select")
  const [AsignedToDropDownTitle, setAsignedToDropDownTitle] = useState("Select")

  const [TypeDropDownTitle, setTypeDropDownTitle] = useState("Select")
  const [PercentDropDownTitle, setPercentDropDownTitle] = useState("Select")

//new Date()
  const [value, setValue] = React.useState(null);
  return (
    <>
      <Container>


<h1>Enviar Ticket</h1>


      <Card className="CSSInput card-transparent-border" style={{ width: "100%", backgroundColor: "transparent" }}>
  <Form fluid>

  <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
  <div>
    Tipo: &nbsp;
    <Dropdown title={TypeDropDownTitle}>
      <Dropdown.Item onClick={() => setTypeDropDownTitle("Bug")}>Bug</Dropdown.Item>
      <Dropdown.Item onClick={() => setTypeDropDownTitle("Feature")}>Feature</Dropdown.Item>
      <Dropdown.Item onClick={() => setTypeDropDownTitle("Support")}>Support</Dropdown.Item>
    </Dropdown>
  </div>
  <div>
    {/* Add more input fields on the right */}
  </div>
</div>

<p style={{ marginBottom: "20px" }}></p>

    <div style={{ display: "flex", flexDirection: "row" }}>
   
    </div>
    <Form.Group controlId="text" style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "100%" }}>
  <Form.ControlLabel style={{ flex: "0 0 auto", marginRight: "10px" }}>Asunto: </Form.ControlLabel>
  <Form.Control name="text" style={{ flex: "1", width: "100%" }} />
</Form.Group>






<div style={{ display: "flex", flexDirection: "row" }}>
  <Form.Group controlId="textarea" style={{ width: "100%" }}>
    <Form.ControlLabel style={{ width: "100%" }}>Descripcion</Form.ControlLabel>
    
    <Form.Control rows={5} name="textarea" accepter={Textarea} style={{ width: "100%" }} />
  </Form.Group>
</div>

<p style={{ marginBottom: "40px" }}></p>



    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ flex: 1 }}>
   

      Estado:  &nbsp;
      <Dropdown title={StatusDropDownTitle}>
    <Dropdown.Item onClick={()=>setStatusDropDownTitle("New")}>New</Dropdown.Item>
    <Dropdown.Item onClick={()=>setStatusDropDownTitle("In Progress")}>In Progress</Dropdown.Item>
    <Dropdown.Item onClick={()=>setStatusDropDownTitle("Resolved")}>Resolved</Dropdown.Item>
    <Dropdown.Item onClick={()=>setStatusDropDownTitle("Feedback")}>Feedback</Dropdown.Item>
    <Dropdown.Item onClick={()=>setStatusDropDownTitle("Closed")}>Closed</Dropdown.Item>
  </Dropdown>


      </div>
      <div style={{ flex: 1 }}>
      Fecha de inicio:  &nbsp;
      <DatePicker  format="yyyy-MM-dd" style={{ width: 200 }} value={value} onChange={setValue} />
      </div>
    </div>



    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ flex: 1 }}>
   

      Prioridad:  &nbsp;
      <Dropdown title={PriorityDropDownTitle}>
    <Dropdown.Item onClick={()=>setPriorityDropDownTitle("Low")}>Low</Dropdown.Item>
    <Dropdown.Item onClick={()=>setPriorityDropDownTitle("Normal")}>Normal</Dropdown.Item>
    <Dropdown.Item onClick={()=>setPriorityDropDownTitle("High")}>High</Dropdown.Item>
    <Dropdown.Item onClick={()=>setPriorityDropDownTitle("Urgent")}>Urgent</Dropdown.Item>
    <Dropdown.Item onClick={()=>setPriorityDropDownTitle("Immediate")}>Immediate</Dropdown.Item>
  </Dropdown>


      </div>
      <div style={{ flex: 1 }}>
      Fecha fin:  &nbsp;
      <DatePicker  format="yyyy-MM-dd" style={{ width: 200 }} value={value} onChange={setValue} />
      </div>
    </div>



    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ flex: 1 }}>
   

      Asignado a:  &nbsp;
      <Dropdown title={AsignedToDropDownTitle}>
    <Dropdown.Item onClick={()=>setAsignedToDropDownTitle("Grupo 0 GTI")}>Grupo 0 GTI</Dropdown.Item>
    <Dropdown.Item onClick={()=>setAsignedToDropDownTitle("Grupo 1 GTI")}>Grupo 1 GTI</Dropdown.Item>
    <Dropdown.Item onClick={()=>setAsignedToDropDownTitle("Grupo 2 GTI")}>Grupo 2 GTI</Dropdown.Item>
    <Dropdown.Item onClick={()=>setAsignedToDropDownTitle("Grupo 3 GTI")}>Grupo 3 GTI</Dropdown.Item>
    <Dropdown.Item onClick={()=>setAsignedToDropDownTitle("Grupo 4 GTI")}>Grupo 4 GTI</Dropdown.Item>
  </Dropdown>


      </div>
      <div style={{ flex: 1 }}>
      Tiempo estimado   &nbsp;
        
         <input></input>   &nbsp;  Horas 
       
      </div>
    </div>






    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ flex: 1 }}>
        {/* Add more input fields on the left */}
      </div>
      <div style={{ flex: 1 }}>

      Asignado a:  &nbsp;
      <Dropdown title={PercentDropDownTitle}>
    <Dropdown.Item onClick={()=>setPercentDropDownTitle("0%")}>0%</Dropdown.Item>
    <Dropdown.Item onClick={()=>setPercentDropDownTitle("10%")}>10%</Dropdown.Item>
    <Dropdown.Item onClick={()=>setPercentDropDownTitle("20%")}>20%</Dropdown.Item>
    <Dropdown.Item onClick={()=>setPercentDropDownTitle("30%")}>30%</Dropdown.Item>
    <Dropdown.Item onClick={()=>setPercentDropDownTitle("40%")}>40%</Dropdown.Item>
    <Dropdown.Item onClick={()=>setPercentDropDownTitle("50%")}>50%</Dropdown.Item>
    <Dropdown.Item onClick={()=>setPercentDropDownTitle("60%")}>60%</Dropdown.Item>
    <Dropdown.Item onClick={()=>setPercentDropDownTitle("70%")}>70%</Dropdown.Item>
    <Dropdown.Item onClick={()=>setPercentDropDownTitle("80%")}>80%</Dropdown.Item>
    <Dropdown.Item onClick={()=>setPercentDropDownTitle("90%")}>90%</Dropdown.Item>
    <Dropdown.Item onClick={()=>setPercentDropDownTitle("100%")}>100%</Dropdown.Item>
  </Dropdown>

      </div>
    </div>






    <p style={{ marginBottom: "40px" }}></p>
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
