import React from 'react'
import { Menu, Button, Dropdown, Input } from 'semantic-ui-react'
import CartSummary from './CartSummary'

const options = [
    { key: 'employee', icon: 'user circle', text: 'Employee', value: 'employee' },
    { key: 'employer', icon: 'user circle', text: 'Employer', value: 'employer' },]

export default function Navi() {
    return (
        <div>
            {/* <Segment inverted> */}
            <Menu size='large' inverted color='purple' fixed >
                <Menu.Item
                    name='HRMS'
                />
                <Menu.Item
                    name='Find a job'
                />
                <Menu.Item
                    name='Resume'
                />

                <Menu.Item>
                    <Input className='icon' icon='search' placeholder='Search...' />
                </Menu.Item>

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
            </Menu>

            {/* </Segment> */}


        </div>
    )
}
