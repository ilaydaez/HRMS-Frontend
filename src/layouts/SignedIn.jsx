import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right"
                    src="https://cdn2.iconfinder.com/data/icons/green-2/32/expand-color-web2-23-512.png" />
                <Dropdown pointing='top left' text='İlayda Ez'>
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info" />
                        <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out" />
                    </Dropdown.Menu>
                </Dropdown>

            </Menu.Item>
        </div>
    )
}
