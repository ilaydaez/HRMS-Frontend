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
import { ToastContainer } from 'react-toastify'
import JobAdversimentAdd from '../pages/add/JobAdversimentAdd'
import ProfileDto from '../pages/dto/ProfileDto'
import ApplicationsDto from '../pages/dto/ApplicationsDto'
import CvUpdateForm from '../pages/forms/CvUpdateForm'
import CreateCvAdd from '../pages/add/CreateCvAdd'
import ResumeDto from '../pages/dto/resume/ResumeDto'
import Home from './Home'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'


export default function Dashboard() {

    return (
        <div>
            <ToastContainer position="bottom-right" />

            <Grid>
                <Grid.Column>
                    <Route exact path='/jobAdversimentAdd' component={JobAdversimentAdd} />
                    <Route exact path='/profile' component={ProfileDto} />
                    <Route exact path='/resumeUpdate/:id' component={CvUpdateForm} />
                    <Route exact path='/cvAdd' component={CreateCvAdd} />
                    <Route exact path='/profile/:id' component={ResumeDto} />
                    <Route exact path='/' component={Home} />
                    <Route exact path='/login' component={LoginForm} />
                    <Route exact path='/signUp' component={SignUpForm} />
                    
                    
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
                        <Route exact path='/profile/cv' component={CreateCvList} />
                        <Route exact path='/employee' component={EmployeeList} />
                        <Route exact path='/employer' component={EmployerList} />
                        <Route exact path='/systemPersonnel' component={SystemPersonnelList} />
                        <Route exact path='/applications' component={ApplicationsDto} />
                        
                    </Grid.Column>
                </Grid.Row>
            </Grid>




        </div>
    )
}
