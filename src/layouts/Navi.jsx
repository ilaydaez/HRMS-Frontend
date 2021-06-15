import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useHistory } from 'react-router'
import { Menu, Button, Input, Container, Dropdown } from 'semantic-ui-react'
import CityList from '../pages/CityList'
import CartSummary from './CartSummary'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'



export default function Navi() {

    const [isAuthenticated, setIsAuthenticated] = useState(true)

    const history = useHistory()

    function handleSignOut(params) {
        setIsAuthenticated(false)
        history.push('/')

    }

    function handleSignIn(params) {
        setIsAuthenticated(true)

    }
    return (
        
        <div>
            <Menu size='massive' inverted color='purple' >
                <Container>

                    <Menu.Item as={NavLink} to='/'
                        name='HRMS'
                    />
                    <Menu.Item as={NavLink} to='/'
                        name='Find a job'
                    />
                    <Menu.Item as={NavLink} to='/cv'
                        name='Resume'
                    />
                    <Menu.Item>
                        <Dropdown pointing='top left' text='Users'>
                            <Dropdown.Menu>
                                <Dropdown.Item as={NavLink} to='/employee' text='Employee' />
                                <Dropdown.Item as={NavLink} to='/employer' text='Employer' />
                                <Dropdown.Item as={NavLink} to='/systemPersonnel' text='System Personnel' />
                            </Dropdown.Menu>

                        </Dropdown>

                    </Menu.Item>




                    <Menu.Menu position='right'>
                        <CartSummary />
                        {isAuthenticated ? <SignedIn signOut={handleSignOut} bisey="1" /> : <SignedOut signIn={handleSignIn} />}
                    </Menu.Menu>
                </Container>
            </Menu>

            <Input type='text' placeholder='Position/CompanyName...' action>
                <input />

                <CityList />

                <Button color='teal' type='submit'>Search</Button>
            </Input>
        </div>
    )
}
