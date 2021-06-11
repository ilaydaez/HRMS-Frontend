import React from 'react'
import { Menu, Button, Dropdown, Input, Container, Select } from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react'
import CityList from '../pages/CityList'
import CartSummary from './CartSummary'

const options = [
    { key: 'employee', icon: 'user circle', text: 'Employee', value: 'employee' },
    { key: 'employer', icon: 'user circle', text: 'Employer', value: 'employer' },]

export default function Navi() {

    return (
        <div>
            {/* <Segment inverted> */}
            <Menu size='massive' inverted color='purple' fixed >
                <Container>

                    <Menu.Item
                        name='HRMS'
                    />
                    <Menu.Item
                        name='Find a job'
                    />
                    <Menu.Item
                        name='Resume'
                    />

                    <Menu.Menu position='right'>
                        <CartSummary />

                        <Button.Group inverted color='teal'>
                            <Button>Log-in</Button>
                            <Button.Or />
                            <Button positive>Sign Up</Button>
                            <Dropdown
                                className='button icon'
                                floating
                                options={options}
                                trigger={<></>}
                            />
                        </Button.Group>
                    </Menu.Menu>

                </Container>

            </Menu>

            <Input center type='text' placeholder='Position/CompanyName...' action>
                <input />

                <CityList />

                <Button color='teal' type='submit'>Search</Button>
            </Input>



            {/* </Segment> */}


        </div>
    )
}
