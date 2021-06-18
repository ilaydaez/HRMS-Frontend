import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import { Item, Image, Button, Icon } from 'semantic-ui-react'
import JobAdvesimentService from '../../services/jobAdversimentService'


export default function JobAdversimentDto() {

    let { id } = useParams();

    const [jobAdversiment, setJobAdversiment] = useState([])

    useEffect(() => {
        let jobAdversimentService = new JobAdvesimentService()
        jobAdversimentService.getByJobAdversimentId(id).then(result => setJobAdversiment(result.data.data))
    }, [])

    return (
        <div>
            <Item.Group>
                <Item>
                    <Image
                        size='medium'
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ51xCBVsAzl07KiuMVcwJSFOITkI2S59a0Qgu8GnBuxeQZJcBkN37-gb49BfabGATulc&usqp=CAU' />
                    <Item.Content>
                        <Item.Header>{jobAdversiment.position?.position}</Item.Header>
                        <Item.Header>{jobAdversiment.employer?.companyName}</Item.Header>
                        <Item.Meta>{jobAdversiment.description}</Item.Meta>
                        <Item.Extra> City : {jobAdversiment.cities?.city}</Item.Extra>
                        <Item.Extra> Open Position: {jobAdversiment.openPosition}</Item.Extra>
                        <Item.Extra> Min salary: {jobAdversiment.minSalary}</Item.Extra>
                        <Item.Extra> Min salary: {jobAdversiment.maxSalary}</Item.Extra>
                        <Item.Extra> Application Deadline: {jobAdversiment.applicationDeadline}</Item.Extra>
                        <Item.Extra> Listing Date : {jobAdversiment.listingDate}</Item.Extra>
                        <Item.Extra>
                            <Button color='teal' floated='right'>
                                Apply
                                <Icon name='right chevron' />
                            </Button>
                        </Item.Extra>
                    </Item.Content>
                </Item>
            </Item.Group>
        </div>
    )
}