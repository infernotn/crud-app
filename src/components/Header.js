import {React} from 'react';
import {Link} from 'react-router-dom';
import {
Navbar,
Nav,
NavItem,
NavbarBrand
 } from 'reactstrap';
 const Header = () => {
    return (
        <div >
            <Navbar color="dark" dark>
        
                <NavbarBrand href='/' >My team</NavbarBrand>
               
                <Nav>
                    <NavItem>
                          <Link to='/add' className='btn btn-primary mr-1'>Add User</Link>
                    </NavItem>
                </Nav>
       
            </Navbar>
        </div>
    )
}
export default Header;