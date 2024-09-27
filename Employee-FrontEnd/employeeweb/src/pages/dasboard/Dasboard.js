import { useEffect, useState } from "react"
import { Button, Col, Container, Row, Table } from "react-bootstrap";


const Dasboard=()=>{
    const [employees ,setEmployees]=useState([]);
    useEffect(()=>{
        const fetchEmployees=async()=>{
            try{
                const response=await fetch("http://localhost:8080/api/employee");
                const data= await response.json();
                setEmployees(data);
            }
            catch(error)
            {
                console.error("Error in Fetching Employees",error.message);
            }
              }
              fetchEmployees();

            },[]);
            // console.log(Array.isArray(employees));  // Check if employees is an array
            // console.log(employees);  // Print employees to see its structure


    return(
    <Container className="mt-5">
        <Row>
            <Col>
            <h1 className="text-center">Employees</h1>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Phone</td>
                        <td>Department</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee)=>(
                        <tr key={employee.id}>
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.phone}</td>
                            <td>{employee.department}</td>
                            <td>
                                <Button variant="outline-secondary">Update</Button>{"  "}
                                <Button variant="outline-danger">Delete</Button>

                            </td>

                            </tr>
                        
                    ))}
                </tbody>
            </Table>
            </Col>
        </Row>
    </Container> 
    )

}
export default Dasboard