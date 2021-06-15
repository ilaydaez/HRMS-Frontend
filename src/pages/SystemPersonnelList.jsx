import React, { useEffect, useState } from 'react'
import { Table } from 'semantic-ui-react'
import SystemPersonnelService from '../services/systemPersonnelService'

export default function SystemPersonnelList() {

    const [personnels, setPersonnel] = useState([])

    useEffect(() => {
        let personnelService = new SystemPersonnelService()
        personnelService.getPersonnel().then(result => setPersonnel(result.data.data))
    },[])

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
                        personnels.map((personnel) => (
                            <Table.Row key={personnel.id}>
                                <Table.Cell>{personnel.firstName}</Table.Cell>
                                <Table.Cell>{personnel.lastName}</Table.Cell>
                                <Table.Cell>{personnel.email}</Table.Cell>
                            </Table.Row>
                        ))
                    }

                </Table.Body>
            </Table>

        </div>
    )
}

