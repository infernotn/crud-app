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
        <div>
            <h1>Add User</h1>
            <Form>
                <FormGroup>
                    <Label>Name :</Label>
                    <Input type='text' placeholder="Enter your name"></Input>
                
                </FormGroup>
                <Button type='submit'>Submit</Button>
                <Link to="/" className="btn btn-danger ml-2">Cancel</Link>

            </Form>

        </div>
    )
}
export default AddUser;