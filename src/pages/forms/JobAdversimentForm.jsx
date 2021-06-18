import { Form, Input, TextArea, Button, Header, Segment, Icon, Container } from 'semantic-ui-react'
import React from 'react'
import CityList from '../CityList'
import WorkingTimeList from '../WorkingTimeList'
import WorkingPositionList from '../WorkingPositionList'

export default function JobAdversimentForm() {



    return (
        <div>
           <Container>
           <Header as='h2'>
                    <Icon name='announcement' />
                    <Header.Content>New Job Adversiment</Header.Content>
                </Header>
                <Segment color='teal'>
                    <Form>
                        <Form.Field
                            id='form-input-control-company-name'
                            control={Input}
                            label='Company Name'
                            placeholder='Company Name'
                        />

                        <Form.Field
                            control={Input}
                            label='Job Position'
                            placeholder='Job Position'
                        />

                        <Form.Group widths='equal'>
                            <Form.Field control={Input} placeholder='Working Time'>
                                <WorkingTimeList />
                            </Form.Field>

                            <Form.Field control={Input} placeholder='Working Position'>
                                <WorkingPositionList />
                            </Form.Field>

                            <Form.Field control={Input} placeholder='City'>
                                <CityList />
                            </Form.Field>
                        </Form.Group>

                        <Form.Group widths='equal'>
                            <Form.Field
                                control={Input}
                                label='Min Salary'
                                placeholder='Min Salary'
                            />

                            <Form.Field
                                control={Input}
                                label='Max Salary'
                                placeholder='Max Salary'
                            />

                            <Form.Field
                                control={Input}
                                type='date'
                                label='Application Deadline'
                                placeholder='Application Deadline'
                            />
                        </Form.Group>

                        <Form.Field
                            id='form-textarea-control-opinion'
                            control={TextArea}
                            label='Job Description'
                            placeholder='Job Description'
                        />

                        <Button color='teal' content='Publish' fluid />

                    </Form>
                </Segment>
           </Container>
                


        </div>
    )
}
