import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Card, Header, Image, Item, Segment } from 'semantic-ui-react'
import CreateCvService from '../../../services/createCvService'

export default function ResumeEmployee() {


    let { id } = useParams();

    const [cvEmployee, setCvEmployee] = useState([])

    const [cvId, setCvId] = useState([])

    useEffect(() => {
        let createCvService = new CreateCvService()
        createCvService.getCvWithEmployeeCvId(id).then(result => setCvEmployee(result.data.data))


    }, [])

    useEffect(() => {
        let createCvService = new CreateCvService()
        createCvService.getCvId(id).then(result => setCvId(result.data.data))
    }, [])

    return (
        <div>
            <Segment color="teal">

                <Item.Group >
                    <Header size='medium' dividing textAlign='left' color='grey'>
                        <Header.Content>Personal Information</Header.Content>
                    </Header>
                </Item.Group>

                <Card.Group>
                    <Image circular centered size="small" src='https://cdn2.iconfinder.com/data/icons/green-2/32/expand-color-web2-23-512.png' />
                    <Card raised fluid>
                        <Card.Content textAlign='left'>
                        <Button basic circular size='mini' floated='right' icon='edit' />

                            <Card.Header>{cvEmployee.firstName} {cvEmployee.lastName}</Card.Header>
                            <Card.Header>{cvEmployee.schools?.faculties?.departments?.departmentName}</Card.Header>

                            <Card.Content header='Birth Date' meta={cvEmployee.birthDate} />

                            <Card.Content header='Linkedin Adress' meta={cvId.linkedin} />
                            <Card.Content header='Github Adress' meta={cvId.github} />
                            
                        </Card.Content>
                    </Card>
                </Card.Group>
            </Segment>

        </div>
    )
}
