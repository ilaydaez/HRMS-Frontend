import React, { useEffect, useState } from 'react'
import { Table } from 'semantic-ui-react'
import UserService from '../services/userService'

export default function UserList() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        let userService = new UserService()
        userService.getUsers().then(result => setUsers(result.data.data))
    })

    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>E-mail Address</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        users.map((user) => (
                            <Table.Row key={user.id}>
                                <Table.Cell>{user.firstName}</Table.Cell>
                                <Table.Cell>{user.lastName}</Table.Cell>
                                <Table.Cell>{user.email}</Table.Cell>   
                            </Table.Row>
                        ))
                    }

                </Table.Body>
            </Table>
        </div>
    )
}
