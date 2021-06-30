import React from 'react'
import { useSelector } from 'react-redux'
import { Dropdown, Menu, Label } from 'semantic-ui-react'

export default function CartSummary() {

    const { applicationItems } = useSelector(state => state.application)

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
