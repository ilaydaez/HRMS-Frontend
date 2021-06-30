import React from 'react'
import { useSelector } from 'react-redux'
import { Button, Card, Image, Label } from 'semantic-ui-react'

export default function RecordedDto() {

    const {recordedItems} = useSelector(state => state.recorded)

    return (
        <div>
            {
                recordedItems.map((recordedItem) => (

                    <Card.Group key={recordedItem.jobAdversiment.adversimentId}>
                        <Card fluid>
                            <Card.Content>
                                <Image
                                    floated='left'
                                    src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ51xCBVsAzl07KiuMVcwJSFOITkI2S59a0Qgu8GnBuxeQZJcBkN37-gb49BfabGATulc&usqp=CAU'}
                                    size='mini'
                                    circular verticalAlign='bottom'
                                />
                                <Card.Header>{recordedItem.jobAdversiment.position?.position}</Card.Header>
                                <Card.Meta>{recordedItem.jobAdversiment.employer?.companyName}</Card.Meta>
                                <Card.Description>
                                    {recordedItem.jobAdversiment.description}
                                </Card.Description>
                                <Label size="medium" attached="bottom left">
                                    {recordedItem.jobAdversiment.workingTime?.time}
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
