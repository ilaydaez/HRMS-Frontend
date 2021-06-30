import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Card, Image, Button, Grid, Popup } from 'semantic-ui-react'
import CreateCvService from '../services/createCvService'

export default function CreateCvList() {

    const [cvs, setCreateCV] = useState([])

    useEffect(() => {
        let createCvService = new CreateCvService()
        createCvService.getByCvWithEmployees().then(result => setCreateCV(result.data.data))
    }, [])

    return (
        <div>

            <Grid>
                <Grid.Column>
                    <Popup
                        trigger={
                            <Button
                                as={NavLink}
                                to='/profile/cvAdd'
                                color='teal'
                                floated='right'
                                icon='add'
                                content='Add resume' />}
                        content='Add a new resume.'
                        on='hover'
                    />
                </Grid.Column>
            </Grid>


            {
                cvs.map(cv => (

                    <Card.Group key={cv.cvId}>

                        <Card fluid>
                            <Card.Content>
                                <Image
                                    floated='left'
                                    src={'https://cdn2.iconfinder.com/data/icons/green-2/32/expand-color-web2-23-512.png'}
                                    size='mini'
                                    circular verticalAlign='bottom'
                                />

                                <Card.Header>{cv.firstName} {cv.lastName}</Card.Header>

                                <Button as={NavLink} to='/profile/resumeUpdate' floated='right' size='mini' color='teal'>Update</Button>
                            </Card.Content>
                        </Card>
                    </Card.Group>
                ))
            }

        </div>
    )
}
