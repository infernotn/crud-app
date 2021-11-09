import React from 'react'
import {Link} from 'react-router-dom';
import{
    Form,
    FormGroup,
    Label,
    Input,
    Button
    } from 'reactstrap';

const EditUser = () => {
    return (
        <div className='m-auto mt-4 p-3 rounded ' style={{backgroundColor:'rgba(50,50,80,0.1)' ,maxWidth:"60%"}}>
                        <h1   className='text-center font-weight-bold '> Edit User </h1>

            <Form >
                <FormGroup>
                    <Label>Name :</Label>
                    <Input type='text' placeholder="Enter your name"></Input>
                
                </FormGroup>
                <div className='d-flex  ' >
                    
                <Button className=' ms-auto me-2 bg-primary ' type='submit'>Save Changes</Button>
                <Link to="/" className="btn btn-danger mr-1 ">Cancel</Link>
                </div>
            </Form>
        </div>
    )
}
export default EditUser;