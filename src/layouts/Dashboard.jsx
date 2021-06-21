import React from 'react'
import Categories from './Categories'
import { Grid } from 'semantic-ui-react'
import { Route } from 'react-router'
import JobAdversimentList from '../pages/JobAdversimentList'
import SystemPersonnelList from '../pages/SystemPersonnelList'
import EmployeeList from '../pages/EmployeeList'
import EmployerList from '../pages/EmployerList'
import CreateCvList from '../pages/CreateCvList'
import JobAdversimentDto from '../pages/dto/JobAdversimentDto'
import JobAdversimentForm from '../pages/forms/JobAdversimentForm'

export default function Dashboard() {

    return (
        <div>
            <Grid>
            <Grid.Column width={12}>
                <Route exact path='/jobAdversimentForm' component={JobAdversimentForm} />
                </Grid.Column>
            </Grid>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                    <Route path='/jobAdversiments' component={Categories} />
                        
                    </Grid.Column>

                    <Grid.Column width={12}>
                        <Route exact path='/jobAdversiments' component={JobAdversimentList} />
                        <Route exact path='/jobAdversiments/:id' component={JobAdversimentDto} />
                        <Route exact path='/cv' component={CreateCvList} />
                        <Route exact path='/employee' component={EmployeeList} />
                        <Route exact path='/employer' component={EmployerList} />
                        <Route exact path='/systemPersonnel' component={SystemPersonnelList} />


                    </Grid.Column>
                </Grid.Row>
            </Grid>




        </div>
    )
}
