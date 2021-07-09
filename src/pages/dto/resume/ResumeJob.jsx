import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Card, Header, Item, Segment } from 'semantic-ui-react'
import CreateCvService from '../../../services/createCvService'

export default function ResumeJob() {

    let { id } = useParams();

    const [cvId, setCvId] = useState([])

    useEffect(() => {
        let createCvService = new CreateCvService()
        createCvService.getCvId(id).then(result => setCvId(result.data.data))
    }, [])
    return (
        <div>
            <Segment color="teal">
                <Item.Group >
                    <Header size='medium' dividing textAlign='left' color='grey'>
                        <Header.Content>Work Experiences</Header.Content>
                    </Header>
                </Item.Group>

                <Card.Group >
                    <Card raised fluid>
                        <Card.Content textAlign='left'>
                            <Card.Content header='Company Name' meta={cvId.companyName} />
                            <Card.Content header='Start Date' meta={cvId.jobStartDate} />
                            <Card.Content header='Finish Date' meta={cvId.jobFinishDate} />
                            <Card.Content header='Job Description' meta={cvId.jobDescription} />
                        </Card.Content>
                    </Card>
                </Card.Group>
            </Segment>
        </div>
    )
}
