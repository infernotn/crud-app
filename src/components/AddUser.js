import React from 'react'
import {Link} from 'react-router-dom';

import{
    Form,
    FormGroup,
    Label,
    Input,
    Button
    } from 'reactstrap';

 const AddUser = () => {
    return (
        <div className='m-auto mt-4 p-3 rounded ' style={{backgroundColor:'rgba(50,50,80,0.1)' ,maxWidth:"60%"}}>
                   <h1   className='text-center font-weight-bold '> Add New User </h1>

            <Form style={{maxWidth:"80%"}} className='m-auto'>
                <FormGroup>
                    <Label>Name :</Label>
                    <Input type='text' placeholder="Enter your name"></Input>
                
                </FormGroup>
                <div className=" d-flex ">
                <div className="ms-auto mt-1 mb-1">
                <Button type='submit' className=" me-1">Submit</Button>
                <Link to="/" className="btn btn-danger ">Cancel</Link>
</div>
</div>
            </Form>

        </div>
    )
}
export default AddUser;