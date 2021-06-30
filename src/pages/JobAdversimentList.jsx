import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, NavLink, useParams } from 'react-router-dom'
import { Button, Card, Image, Popup, Grid, Label } from 'semantic-ui-react'
import JobAdvesimentService from '../services/jobAdversimentService'
import { toast } from 'react-toastify'
import { addToRecorded } from '../store/actions/recordedAction'

export default function JobAdversimentList({ openPage }) {

    const dispatch = useDispatch()

    let { id } = useParams();

    const [jobAdversiments, setJobAdversiments] = useState([])


    useEffect(() => {
        let jobAdversimentService = new JobAdvesimentService()
        jobAdversimentService.getJobAdversiments(id).then(result => setJobAdversiments(result.data.data))
    }, [])

    const handleAddToRecorded = (jobAdversiment) => {
        dispatch(addToRecorded(jobAdversiment))
        toast.success(`${jobAdversiment.position?.position} İş İlanı Kaydedildi`)
    }



    return (
        <div>
            <Grid>
                <Grid.Column>
                    <Popup

                        trigger={
                            <Button
                                onClick={openPage}
                                as={NavLink}
                                to='/jobAdversimentAdd'
                                color='teal'
                                floated='right'
                                icon='add'
                                content='Add job adversiment' />}
                        content='Post active job posting.'
                        on='hover'
                    />
                </Grid.Column>
            </Grid>

            {
                jobAdversiments.map(jobAdversiment => (

                    <Card.Group key={jobAdversiment.adversimentId}>
                        <Card fluid>
                            <Card.Content>
                                <Image
                                    floated='left'
                                    src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ51xCBVsAzl07KiuMVcwJSFOITkI2S59a0Qgu8GnBuxeQZJcBkN37-gb49BfabGATulc&usqp=CAU'}
                                    size='mini'
                                    circular verticalAlign='bottom'
                                />
                                <Card.Header><Link to={`/jobAdversiments/${jobAdversiment.adversimentId}`}>{jobAdversiment.position?.position}</Link></Card.Header>
                                <Card.Meta>{jobAdversiment.employer?.companyName}</Card.Meta>
                                <Card.Description>
                                    {jobAdversiment.description}
                                </Card.Description>
                                <Label size="medium" attached="bottom left">
                                    {jobAdversiment.workingTime?.time}
                                </Label>
                                <Button basic
                                    onClick={() => handleAddToRecorded(jobAdversiment)}
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
