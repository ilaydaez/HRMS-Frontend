import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut({signIn}) {
    return (
        <div>
            <Menu.Item>
                <Button.Group inverted color='teal'>
                    <Button as={NavLink} to='/login' onClick={signIn}>Log-in</Button>
                    <Button.Or />
                    <Button as={NavLink} to='/signUp' onClick={signIn} positive>Sign Up</Button>
                </Button.Group>
            </Menu.Item>
        </div>
    )
}
