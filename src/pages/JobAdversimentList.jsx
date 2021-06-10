import React, { useEffect, useState } from 'react'
import { Table } from 'semantic-ui-react'
import { Button, Card, Image, Divider } from 'semantic-ui-react'
import JobAdvesimentService from '../services/jobAdversimentService'

export default function JobAdversimentList() {

    const [jobAdversiments, setJobAdversiment] = useState([])

    useEffect(() => {
        let jobAdversimentService = new JobAdvesimentService()
        jobAdversimentService.getJobAdversiments().then(result => setJobAdversiment(result.data.data))
    })

    return (
        <div>
            {/* <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Position</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>City</Table.HeaderCell>
                        <Table.HeaderCell>Minimum Salary</Table.HeaderCell>
                        <Table.HeaderCell>Maxsimum Salary</Table.HeaderCell>
                        <Table.HeaderCell>Application Deadline</Table.HeaderCell>
                        <Table.HeaderCell>Listing Date</Table.HeaderCell>
                        <Table.HeaderCell>Active or Pasive</Table.HeaderCell>
                        <Table.HeaderCell>Open Position</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobAdversiments.map((jobAdversiment) => (
                            <Table.Row key={jobAdversiment.adversimentId}>
                                <Table.Cell>{jobAdversiment.position}</Table.Cell>
                                <Table.Cell>{jobAdversiment.description}</Table.Cell>
                                <Table.Cell>{jobAdversiment.cities.city}</Table.Cell>
                                <Table.Cell>{jobAdversiment.minSalary}</Table.Cell>
                                <Table.Cell>{jobAdversiment.maxSalary}</Table.Cell>
                                <Table.Cell>{jobAdversiment.applicationDeadline}</Table.Cell>
                                <Table.Cell>{jobAdversiment.listingDate}</Table.Cell>
                                <Table.Cell>{jobAdversiment.active}</Table.Cell>
                                <Table.Cell>{jobAdversiment.openPosition}</Table.Cell>
                            </Table.Row>
                        ))
                    }

                </Table.Body>
            </Table> */}

            {
                jobAdversiments.map(adversiment => (
                    <Card.Group singleLine>
                        <Card fluid>
                            <Card.Content>
                                <Image 
                                src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ51xCBVsAzl07KiuMVcwJSFOITkI2S59a0Qgu8GnBuxeQZJcBkN37-gb49BfabGATulc&usqp=CAU'} 
                                size='tiny' 
                                circular verticalAlign='bottom'
                                    />
                                <Divider />
                                <Card.Header>{adversiment.position?.position}</Card.Header>
                                <Card.Meta>{adversiment.employer?.companyName}</Card.Meta>
                                <Card.Description>
                                    {adversiment.description}
                                </Card.Description>
                            </Card.Content>

                            <Card.Content extra>
                                <div>
                                    <Button basic
                                        floated='right'
                                        icon='heart'
                                        label={{ basic: true, color: 'grey', pointing: 'left', content: 'ilanı kaydet' }}
                                    />
                                </div>
                            </Card.Content>
                        </Card>

                    </Card.Group>
                ))
            }




        </div>
    )
}
