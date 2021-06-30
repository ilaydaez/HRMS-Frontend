import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown, Menu, Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right"
                    src="https://cdn2.iconfinder.com/data/icons/green-2/32/expand-color-web2-23-512.png" />
                <Dropdown pointing='top left' text='İlayda Ez'>
                    <Dropdown.Menu>
                        <Dropdown.Item as={NavLink} to="/profile" text="Profile" icon="info" />
                        <Dropdown.Item onClick={signOut} text="Log Out" icon="sign-out" />
                    </Dropdown.Menu>
                </Dropdown>

            </Menu.Item>
        </div>
    )
}
