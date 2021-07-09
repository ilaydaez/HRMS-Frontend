import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Card, Header, Item, Segment } from 'semantic-ui-react'
import CreateCvService from '../../../services/createCvService';

export default function ResumeSchool() {

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
                        <Header.Content>Education Information</Header.Content>
                    </Header>
                </Item.Group>

                <Card.Group >
                    <Card raised fluid>
                        <Card.Content textAlign='left'>
                            <Card.Content header='School' meta={cvId.schools?.schoolName} />
                            <Card.Content header='Faculty' meta={cvId.schools?.faculties?.facultyName} />
                            <Card.Content header='Department' meta={cvId.schools?.faculties?.departments?.departmentName} />

                            <Card.Content header='Start Date' meta={cvId.schoolStartDate} />
                            <Card.Content header='Finish Date' meta={cvId.schoolFinishDate} />

                        </Card.Content>
                    </Card>
                </Card.Group>
            </Segment>
        </div>
    )
}
