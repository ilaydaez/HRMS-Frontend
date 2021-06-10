import React, { useEffect, useState } from 'react'
import { Table } from 'semantic-ui-react'
import EmployeeService from '../services/employeeService'

export default function EmployeeList() {

    const [employees, setEmployee] = useState([])

    useEffect(() => {
        let employeeService = new EmployeeService()
        employeeService.getEmployees().then(result => setEmployee(result.data.data))
    })

    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Identity Number</Table.HeaderCell>
                        <Table.HeaderCell>Birth Date</Table.HeaderCell>
                        <Table.HeaderCell>E-mail address</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                    {
                        employees.map((employee) => (
                            <Table.Row key={employee.id}>
                                <Table.Cell>{employee.firstName}</Table.Cell>
                                <Table.Cell>{employee.lastName}</Table.Cell>
                                <Table.Cell>{employee.identityNumber}</Table.Cell>
                                <Table.Cell>{employee.birthDate}</Table.Cell>
                                <Table.Cell>{employee.email}</Table.Cell>   
                            </Table.Row>
                        ))
                    }
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    )
}
