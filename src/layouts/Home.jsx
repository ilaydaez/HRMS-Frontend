import React from 'react'
import { Route } from 'react-router-dom'
import { Button, Container, Grid, Header, Icon, Segment } from 'semantic-ui-react'

export default function Home() {
    return (

        <Segment
            raised
            piled
            inverted
            color='purple'
        >
            <Container text>
                <Header
                    as='h1'
                    content='Imagine-a-Company'
                    inverted
                    style={{
                        fontSize: '4em',
                        fontWeight: 'normal',
                        marginBottom: 0,
                        marginTop: '3em',
                    }}
                />
                <Header
                    as='h2'
                    content='Do whatever you want when you want to.'
                    inverted
                    style={{
                        fontSize: '1.7em',
                        fontWeight: 'normal',
                        marginTop: '1.5em',
                    }}
                />
                <Button inverted color='teal' size='huge'>
                    Get Started
                    <Icon name='right arrow' />
                </Button>
            </Container>

        </Segment>

    )
}
