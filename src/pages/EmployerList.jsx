import React, { useEffect, useState } from 'react'
import { Table } from 'semantic-ui-react'
import EmployerService from '../services/employerService'

export default function EmployerList() {

    const [employers, setEmployer] = useState([])

    useEffect(() => {
        let employerService = new EmployerService()
        employerService.getEmployers().then(result => setEmployer(result.data.data))
    },[])


    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Company Name</Table.HeaderCell>
                        <Table.HeaderCell>Phone Number</Table.HeaderCell>
                        <Table.HeaderCell>E-mail Address</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        employers.map((employer) => (
                            <Table.Row key={employer.id}>
                                <Table.Cell>{employer.companyName}</Table.Cell>
                                <Table.Cell>{employer.phone}</Table.Cell>
                                <Table.Cell>{employer.email}</Table.Cell>   
                            </Table.Row>
                        ))
                    }

                </Table.Body>
            </Table>
        </div>
    )
}
