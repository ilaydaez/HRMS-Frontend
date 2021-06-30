import React from 'react'
import { useSelector } from 'react-redux'
import { Button, Card, Image, Label } from 'semantic-ui-react'

export default function ApplicationsDto() {

    const { applicationItems } = useSelector(state => state.application)

    return (
        <div>
            {
                applicationItems.map((applicationItem) => (

                    <Card.Group key={applicationItem.jobAdversiment.adversimentId}>
                        <Card fluid>
                            <Card.Content>
                                <Image
                                    floated='left'
                                    src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ51xCBVsAzl07KiuMVcwJSFOITkI2S59a0Qgu8GnBuxeQZJcBkN37-gb49BfabGATulc&usqp=CAU'}
                                    size='mini'
                                    circular verticalAlign='bottom'
                                />
                                <Card.Header>{applicationItem.jobAdversiment.position?.position}</Card.Header>
                                <Card.Meta>{applicationItem.jobAdversiment.employer?.companyName}</Card.Meta>
                                <Card.Description>
                                    {applicationItem.jobAdversiment.description}
                                </Card.Description>
                                <Label size="medium" attached="bottom left">
                                    {applicationItem.jobAdversiment.workingTime?.time}
                                </Label>
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
