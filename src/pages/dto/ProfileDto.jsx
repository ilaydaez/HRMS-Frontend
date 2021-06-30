import React from 'react'
import { Tab } from 'semantic-ui-react'
import CreateCvList from '../CreateCvList'
import ApplicationsDto from './ApplicationsDto'
import RecordedDto from './RecordedDto'

const panes=[
    { menuItem: 'Resume', render: () => <Tab.Pane><CreateCvList/></Tab.Pane> },
    { menuItem: 'Applications', render: () => <Tab.Pane><ApplicationsDto/></Tab.Pane> },
    { menuItem: 'Recorded', render: () => <Tab.Pane><RecordedDto/></Tab.Pane> },
    { menuItem: 'Setting', render: () => <Tab.Pane></Tab.Pane> }
]

const ProfileDto =()=>(
    <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
)

export default ProfileDto
