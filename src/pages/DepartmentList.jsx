import React, { useEffect, useState } from 'react'
import { Dropdown } from 'semantic-ui-react'
import DepartmentService from '../services/departmentService'


export default function DepartmentList() {

    const [departments, setDepartments] = useState([])

    useEffect(() => {
        let departmentService = new DepartmentService()
        departmentService.getDepartments().then(result => setDepartments(result.data.data))
    })

    const department = departments.map(department => (
        {
            key: 'department.departmentId',
            text: (department.departmentName),
            value: (department.departmentName)
        }
    ))

    return (
        // <div>

        //     <label htmlFor="departments">Department</label> <br></br>
        //     <select name="" id="departmentId">
        //         <option>Tümü</option>
        //         {departments.map((department) => (
        //             <option key={department.departmentId} value={department}>
        //                 {department.departmentName}
        //             </option>
        //         ))}
        //     </select>

        // </div>

        <Dropdown icon='book' labeled button className='icon' placeholder='Department' multiple selection search options={department} />
    )
}
