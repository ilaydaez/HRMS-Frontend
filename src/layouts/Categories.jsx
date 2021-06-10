import React from 'react'
import { Menu, Dropdown, Input, } from 'semantic-ui-react'
import CityList from '../pages/CityList'
import JobPositionList from '../pages/JobPositionList'
import SchoolList from '../pages/SchoolList'
import FacultyList from '../pages/FacultyList'
import DepartmentList from '../pages/DepartmentList'
import ForeignLanguageList from '../pages/ForeignLanguageList'
import ProgrammingList from '../pages/ProgrammingList'

export default function Categories() {
  return (
    <div>

      <Menu vertical>
        <Menu.Item>
          <Input placeholder='Search...' />
        </Menu.Item>

        <Menu.Item>
          <Menu.Menu>
            <JobPositionList />
            <br></br>
            <CityList />
            <br></br>
            <SchoolList/>
            <br></br>
            <FacultyList/>
            <br></br>
            <DepartmentList/>
            <br></br>
            <ForeignLanguageList/>
            <br></br>
            <ProgrammingList/>
          </Menu.Menu>
        </Menu.Item>

      </Menu>

    </div>
  )
}
