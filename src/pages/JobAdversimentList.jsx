import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button, Card, Image, Popup, Grid } from 'semantic-ui-react'
import JobAdvesimentService from '../services/jobAdversimentService'

export default function JobAdversimentList({openPage}) {

    const [jobAdversiments, setJobAdversiments] = useState([])


    useEffect(() => {
        let jobAdversimentService = new JobAdvesimentService()
        jobAdversimentService.getJobAdversiments().then(result => setJobAdversiments(result.data.data))
    }, [])



    return (
        <div>
            <Grid>
                <Grid.Column>
                    <Popup
                                      
                        trigger={
                            <Button
                            onClick={openPage}
                                as={NavLink}
                                to='/jobAdversimentForm'
                                color='teal'
                                floated='right'
                                icon='add'
                                content='Post a job' />}
                        content='Post active job posting.'
                        on='hover'
                    />
                </Grid.Column>
            </Grid>

            {
                jobAdversiments.map(adversiment => (

                    <Card.Group key={adversiment.adversimentId}>
                        <Card fluid>
                            <Card.Content>
                                <Image
                                    floated='left'
                                    src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ51xCBVsAzl07KiuMVcwJSFOITkI2S59a0Qgu8GnBuxeQZJcBkN37-gb49BfabGATulc&usqp=CAU'}
                                    size='mini'
                                    circular verticalAlign='bottom'
                                />
                                <Card.Header><Link to={`/jobAdversiments/${adversiment.adversimentId}`}>{adversiment.position?.position}</Link></Card.Header>
                                <Card.Meta>{adversiment.employer?.companyName}</Card.Meta>
                                <Card.Description>
                                    {adversiment.description}
                                </Card.Description>
                                <Button basic
                                    floated='right'
                                    icon='heart'
                                    label={{ basic: true, color: 'grey', pointing: 'left', content: 'ilanı kaydet' }}
                                />
                            </Card.Content>
                        </Card>

                    </Card.Group>
                ))
            }

        </div>
    )
}
