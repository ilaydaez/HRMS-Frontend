import React from 'react'
import { Menu, Input, } from 'semantic-ui-react'
import CityList from '../pages/CityList'
import JobPositionList from '../pages/JobPositionList'
import SchoolList from '../pages/SchoolList'
import FacultyList from '../pages/FacultyList'
import DepartmentList from '../pages/DepartmentList'
import ForeignLanguageList from '../pages/ForeignLanguageList'
import ProgrammingList from '../pages/ProgrammingList'
import WorkingPositionList from '../pages/WorkingPositionList'
import WorkingTimeList from '../pages/WorkingTimeList'

export default function Categories() {

  return (
    <div>

      <Menu vertical>
        <Menu.Item>
          <Input placeholder='Search...' />
        </Menu.Item>

        <Menu.Item >
          <Menu.Menu >
            <JobPositionList />
            <CityList />
            <SchoolList/>
            <FacultyList/>
            <DepartmentList/>
            <ForeignLanguageList/>
            <ProgrammingList/>
            <WorkingTimeList/>
            <WorkingPositionList/>
          </Menu.Menu>
        </Menu.Item>

      </Menu>

    </div>
  )
}
