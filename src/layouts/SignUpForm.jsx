import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

export default function SignUpForm() {
    return (
        <div>
            <Grid textAlign='center' style={{ height: '80vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 500 }}>
                    
                    <Header as='h2' color='teal' textAlign='center'>
                        Sign Up
                    </Header>
                    <Form size='large'>
                        <Segment piled raised>
                            <Form.Input fluid icon='user' iconPosition='left' placeholder='First Name' />
                            <Form.Input fluid icon='user' iconPosition='left' placeholder='Last Name' />
                            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                            />

                            <Button color='teal' fluid size='large' >
                                Sign Up
                            </Button>
                        </Segment>
                    </Form>
                    
                </Grid.Column>
            </Grid>
        </div>
    )
}
