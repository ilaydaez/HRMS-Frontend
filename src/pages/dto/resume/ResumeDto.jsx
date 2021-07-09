import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Card, Header, Segment, Item, Button, Rating } from 'semantic-ui-react'
import CreateCvService from '../../../services/createCvService'
import ResumeEmployee from './ResumeEmployee'
import ResumeJob from './ResumeJob'
import ResumeSchool from './ResumeSchool'

export default function ResumeDto() {


    let { id } = useParams();
    const [cvId, setResume] = useState([])

    useEffect(() => {
        let createCvService = new CreateCvService()
        createCvService.getCvId(id).then(result => setResume(result.data.data))
    }, [])

    return (
        <Card.Group>
            <Card fluid>
                <Card.Header ><ResumeEmployee /></Card.Header>

            </Card>

            <Card fluid>
                <Card.Header>
                    <Segment color="teal">
                        <Item.Group >
                            <Header size='medium' dividing textAlign='left' color='grey'>
                                <Header.Content>Covert Letter</Header.Content>
                            </Header>
                        </Item.Group>

                        <Card.Group >
                            <Card raised fluid>
                                <Card.Content textAlign='left'>
                                    <Card.Content meta={cvId.coverLetter} />
                                </Card.Content>
                            </Card>
                        </Card.Group>
                    </Segment>
                </Card.Header>
            </Card>

            <Card fluid>
                <Card.Header ><ResumeJob /></Card.Header>
            </Card>

            <Card fluid>
                <Card.Header ><ResumeSchool /></Card.Header>
            </Card>

            <Card fluid>
                <Card.Header>
                    <Segment color="teal">
                        <Item.Group >
                            <Header size='medium' dividing textAlign='left' color='grey'>
                                <Header.Content>Foreign Language</Header.Content>
                            </Header>
                        </Item.Group>

                        <Card.Group >
                            <Card raised fluid>
                                <Card.Content textAlign='left'>
                                    <Card.Content header="Language" meta={cvId.foreignLanguages?.language} />
                                    <label>Language Level  </label>
                                    <Rating icon='star' defaultRating={cvId.languageLevel} maxRating={5} />

                                </Card.Content>
                            </Card>
                        </Card.Group>
                    </Segment>
                </Card.Header>
            </Card>

            <Card fluid>
                <Card.Header>
                    <Segment color="teal">
                        <Item.Group >
                            <Header size='medium' dividing textAlign='left' color='grey'>
                                <Header.Content>Computer Information</Header.Content>
                            </Header>
                        </Item.Group>

                        <Card.Group >
                            <Card raised fluid>
                                <Card.Content textAlign='left'>
                                    <Card.Content header="Program" meta={cvId.programmings?.programName} />
                                </Card.Content>
                            </Card>
                        </Card.Group>
                    </Segment>
                </Card.Header>
            </Card>

        </Card.Group>

    )
}
