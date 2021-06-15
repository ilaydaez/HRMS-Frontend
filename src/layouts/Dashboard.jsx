import React from 'react'
import UserList from '../pages/UserList'
import Categories from './Categories'
import { Grid, Tab } from 'semantic-ui-react'
import { Route } from 'react-router'
import JobAdversimentList from '../pages/JobAdversimentList'
import SystemPersonnelList from '../pages/SystemPersonnelList'
import EmployeeList from '../pages/EmployeeList'
import EmployerList from '../pages/EmployerList'
import CreateCvList from '../pages/CreateCvList'
import ImageList from '../pages/ImageList'

const panes = [
    {
        menuItem: 'User',
        render: () => <Tab.Pane attached={false}><UserList/></Tab.Pane>,
    },
    {
        menuItem: 'Image',
        render: () => <Tab.Pane attached={false}><ImageList/></Tab.Pane>,
    }
]

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Categories />
                    </Grid.Column>

                    <Grid.Column width={12}>
                        <Route exact path='/' component={JobAdversimentList}/>
                        <Route exact path='/cv' component={CreateCvList}/>
                        <Route exact path='/employee' component={EmployeeList}/>
                        <Route exact path='/employer' component={EmployerList}/>
                        <Route exact path='/systemPersonnel' component={SystemPersonnelList}/>

                         {/* <Tab panes={panes}/> */}
                    </Grid.Column>
                </Grid.Row>
            </Grid>




        </div>
    )
}
