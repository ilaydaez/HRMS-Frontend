import React, { useEffect, useState } from 'react'
import {Table } from 'semantic-ui-react'
import CreateCvService from '../services/createCvService'

export default function CreateCvList() {

    const [cvs, setCreateCV] = useState([])

    useEffect(() => {
        let creteCvService = new CreateCvService()
        creteCvService.getCvs().then(result => setCreateCV(result.data.data))
    })

    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Birth Date</Table.HeaderCell>
                        <Table.HeaderCell>E-mail Address</Table.HeaderCell>
                        <Table.HeaderCell>Github Address</Table.HeaderCell>
                        <Table.HeaderCell>Linkedin Address</Table.HeaderCell>
                        <Table.HeaderCell>City</Table.HeaderCell>
                        <Table.HeaderCell>Job Description</Table.HeaderCell>
                        <Table.HeaderCell>Job Start Date</Table.HeaderCell>
                        <Table.HeaderCell>Job Finish Date</Table.HeaderCell>
                        <Table.HeaderCell>School Name</Table.HeaderCell>
                        <Table.HeaderCell>School Faculty</Table.HeaderCell>
                        <Table.HeaderCell>School Department</Table.HeaderCell>
                        <Table.HeaderCell>School Start Date</Table.HeaderCell>
                        <Table.HeaderCell>School Finish Date</Table.HeaderCell>
                        <Table.HeaderCell>Language</Table.HeaderCell>
                        <Table.HeaderCell>Language Level</Table.HeaderCell>
                        <Table.HeaderCell>Programming</Table.HeaderCell>


                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        cvs.map((cv) => (
                            <Table.Row key={cv.cvId}>
                                <Table.Cell>{cv.firstName}</Table.Cell>
                                <Table.Cell>{cv.lastName}</Table.Cell>
                                <Table.Cell>{cv.birthdate}</Table.Cell>
                                <Table.Cell>{cv.email}</Table.Cell>
                                <Table.Cell>{cv.github}</Table.Cell>
                                <Table.Cell>{cv.linkedin}</Table.Cell>
                                <Table.Cell>{cv.city}</Table.Cell>
                                <Table.Cell>{cv.jobDescription}</Table.Cell>
                                <Table.Cell>{cv.jobStartDate}</Table.Cell>
                                <Table.Cell>{cv.jobFinishDate}</Table.Cell>
                                <Table.Cell>{cv.schoolName}</Table.Cell>
                                <Table.Cell>{cv.faculty}</Table.Cell>
                                <Table.Cell>{cv.department}</Table.Cell>
                                <Table.Cell>{cv.schoolStartDate}</Table.Cell>
                                <Table.Cell>{cv.schoolFinishDate}</Table.Cell>
                                <Table.Cell>{cv.language}</Table.Cell>
                                <Table.Cell>{cv.languageLevel}</Table.Cell>
                                <Table.Cell>{cv.programming}</Table.Cell>

                            </Table.Row>
                        ))
                    }

                </Table.Body>
            </Table>

        </div>
    )
}
