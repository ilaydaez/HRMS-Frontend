import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut({signIn}) {
    return (
        <div>
            <Menu.Item>
                <Button.Group inverted color='teal'>
                    <Button onClick={signIn}>Log-in</Button>
                    <Button.Or />
                    <Button onClick={signIn} positive>Sign Up</Button>
                </Button.Group>
            </Menu.Item>
        </div>
    )
}
