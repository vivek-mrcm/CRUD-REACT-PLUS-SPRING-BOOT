import Button from 'react-bootstrap/Button';
import './PostUser.css';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PostUser=()=>{
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        phone:"",
        department:""
    })
    const handelInputChange=(event)=>{
        const {name,value}=event.target;
        setFormData({
            ...formData,
            [name]:value,
        })

    }
    const navigate=useNavigate();
    const handelSubmit=async(e)=>{
        e.preventDefault();
        console.log(formData);
        try
        {
         const response=await fetch("http://localhost:8080/api/employee",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(formData)

         });
         const data=await response.json();
         console.log("Employee Created:",data);
         navigate("/")
        }
        catch(error)
        {
          console.log("Error Creating Employee",error.message);
        }

    }
    return(
        <>
        <div className='center-form'>
            <h1>Post New Adina Employee</h1>
            <Form onSubmit={handelSubmit}>
                <Form.Group controlId='formBasicName'>
                    <Form.Control
                    type='text'
                    name='name'
                    placeholder='Enter Your Name'
                    value={formData.name}
                    onChange={handelInputChange}
                    
                    />

                </Form.Group>
                <Form.Group controlId='formBasicName'>
                    <Form.Control
                    type='text'
                    name='email'
                    placeholder='Enter Your Email'
                    value={formData.email}
                    onChange={handelInputChange}
                    
                    />
                                    </Form.Group>

                     <Form.Group controlId='formBasicName'>
                    <Form.Control
                    type='text'
                    name='phone'
                    placeholder='Enter Your Phone Number'
                    value={formData.phone}
                    onChange={handelInputChange}
                    
                    />
                                    </Form.Group>

                     <Form.Group controlId='formBasicName'>
                    <Form.Control
                    type='text'
                    name='department'
                    placeholder='Enter Your DepartMent'
                    value={formData.department}
                    onChange={handelInputChange}
                    
                    />

                </Form.Group>
                    {/* (property) variant: string */}
                    <Button variant="primary" type="submit" className="w-100">
                        Post Employee
                    </Button>
             

            </Form>
        </div>
       
        
        </>
    )
}
export default PostUser