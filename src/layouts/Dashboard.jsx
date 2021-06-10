import React from 'react'
import UserList from '../pages/UserList'
import Categories from './Categories'
import { Grid, Tab } from 'semantic-ui-react'
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
        menuItem: 'System Personnel',
        render: () => <Tab.Pane attached={false}><SystemPersonnelList/></Tab.Pane>,
    },
    {
        menuItem: 'Employee',
        render: () => <Tab.Pane attached={false}><EmployeeList/></Tab.Pane>,
    },
    {
        menuItem: 'Employer',
        render: () => <Tab.Pane attached={false}><EmployerList/></Tab.Pane>,
    },
    {
        menuItem: 'Job Adversiment',
        render: () => <Tab.Pane attached={false}><JobAdversimentList /></Tab.Pane>,
    },
    {
        menuItem: 'Cv',
        render: () => <Tab.Pane attached={false}><CreateCvList/></Tab.Pane>,
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
                        <Tab panes={panes}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>




        </div>
    )
}
