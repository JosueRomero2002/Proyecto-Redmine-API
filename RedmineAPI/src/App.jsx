
import React, { useEffect, useState } from "react";

import { Container,Card,Row,Col} from "react-bootstrap";
import ReactDOM from 'react-dom';
import './styles.css';
import './App.css'
import { Form, ButtonToolbar, Button, Input,Dropdown ,DatePicker  } from 'rsuite';


import {issueUploader} from "../Services/Issues.js"

const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);










function App() {





  const [count, setCount] = useState(0)
  const [StatusDropDownTitle, setStatusDropDownTitle] = useState("Select")
  const [PriorityDropDownTitle, setPriorityDropDownTitle] = useState("Select")
  const [AsignedToDropDownTitle, setAsignedToDropDownTitle] = useState("Select")

  const [TypeDropDownTitle, setTypeDropDownTitle] = useState("Select")
  const [PercentDropDownTitle, setPercentDropDownTitle] = useState("Select")

//new Date()
  const [start_date, setstart_date] = useState(null);
  const [due_date, setdue_date] = useState(null);

  const [estimated_hours, setestimated_hours] = useState(null);

  const [subject, setsubject] = useState("");
  const [description, setdescription] = useState("");


  async function handleSubmit() {

/*
if(){

  return;
}
*/

console.log(start_date);
console.log(due_date);



let date = new Date(start_date);

// Extract year, month, and day components
let year = date.getFullYear();
// Month is zero-based, so we add 1 to get the correct month
let month = (date.getMonth() + 1).toString().padStart(2, '0');
let day = date.getDate().toString().padStart(2, '0');

// Format the date as "YYYY-MM-DD"
let formattedDate_start_date = `${year}-${month}-${day}`;


date = new Date(due_date);

// Extract year, month, and day components
 year = date.getFullYear();
// Month is zero-based, so we add 1 to get the correct month
 month = (date.getMonth() + 1).toString().padStart(2, '0');
 day = date.getDate().toString().padStart(2, '0');

// Format the date as "YYYY-MM-DD"
 let formattedDate_due_date = `${year}-${month}-${day}`;




    try{
    const data = await issueUploader(
      1, 
      1,
      "gti-0868-0498", //
      1,//tracker_id,
      TypeDropDownTitle,
    
      AsignedToDropDownTitle ,//
      0,  //status_id, 

      StatusDropDownTitle,


      false, //status_is_closed,
      1,   //priority_id,
      PriorityDropDownTitle,
   
      0, //author_id,
      0,//author_name,


      subject,
      description,
      formattedDate_start_date,
      formattedDate_due_date,
      Number(PercentDropDownTitle),
      true, //is_private,
      Number(estimated_hours),
      Number(estimated_hours),
      0, //spent_hours,
      new Date(), //created_on,
      new Date(),//updated_on,
      new Date(),//closed_on,

  );


    
  if(data != null){
  
  }
        alert("Ticket Enviado!!");


        console.log(data);

}catch(err){
  console.log(err);
alert("Error: No se pudo enviar");

}


  }








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
  <Form.Control onChange={setsubject} name="text" style={{ flex: "1", width: "100%" }} />
</Form.Group>






<div style={{ display: "flex", flexDirection: "row" }}>
  <Form.Group controlId="textarea" style={{ width: "100%" }}>
    <Form.ControlLabel style={{ width: "100%" }}>Descripcion</Form.ControlLabel>
    
    <Form.Control onChange={setdescription} rows={5} name="textarea" accepter={Textarea} style={{ width: "100%" }} />
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
      <DatePicker  format="yyyy-MM-dd HH:mm:ss" style={{ width: 200 }} value={start_date} onChange={setstart_date} />
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
      <DatePicker  format="yyyy-MM-dd HH:mm:ss" style={{ width: 200 }} value={due_date} onChange={setdue_date} />
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
        
         <input onChange={setestimated_hours}></input>   &nbsp;  Horas 
       
      </div>
    </div>






    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ flex: 1 }}>
        {/* Add more input fields on the left */}
      </div>
      <div style={{ flex: 1 }}>

     % Terminado:  &nbsp;
      <Dropdown title={PercentDropDownTitle}>
    <Dropdown.Item onClick={()=>setPercentDropDownTitle(0)}>0%</Dropdown.Item>
    <Dropdown.Item onClick={()=>setPercentDropDownTitle(10)}>10%</Dropdown.Item>
    <Dropdown.Item onClick={()=>setPercentDropDownTitle(20)}>20%</Dropdown.Item>
    <Dropdown.Item onClick={()=>setPercentDropDownTitle(30)}>30%</Dropdown.Item>
    <Dropdown.Item onClick={()=>setPercentDropDownTitle(40)}>40%</Dropdown.Item>
    <Dropdown.Item onClick={()=>setPercentDropDownTitle(50)}>50%</Dropdown.Item>
    <Dropdown.Item onClick={()=>setPercentDropDownTitle(60)}>60%</Dropdown.Item>
    <Dropdown.Item onClick={()=>setPercentDropDownTitle(70)}>70%</Dropdown.Item>
    <Dropdown.Item onClick={()=>setPercentDropDownTitle(80)}>80%</Dropdown.Item>
    <Dropdown.Item onClick={()=>setPercentDropDownTitle(90)}>90%</Dropdown.Item>
    <Dropdown.Item onClick={()=>setPercentDropDownTitle(100)}>100%</Dropdown.Item>
  </Dropdown>

      </div>
    </div>






    <p style={{ marginBottom: "40px" }}></p>
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
      <Form.Group>
        <ButtonToolbar>
          <Button appearance="primary" onClick={handleSubmit}>Enviar Ticket</Button>
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
