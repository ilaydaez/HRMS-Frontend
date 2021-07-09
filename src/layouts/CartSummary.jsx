import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

export default function CartSummary() {


    return (
        <div>
            <Menu.Item>
                <Dropdown item icon='mail'>
                    <Dropdown.Menu>
                        <Dropdown.Item>Inbox</Dropdown.Item>
                        <Dropdown.Item>Starred</Dropdown.Item>
                        <Dropdown.Item>Sent Mail</Dropdown.Item>
                        <Dropdown.Item>Drafts</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Spam</Dropdown.Item>
                        <Dropdown.Item>Trash</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>

        </div>
    )
}
