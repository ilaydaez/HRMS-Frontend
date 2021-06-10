import React, { useEffect, useState } from 'react'
import DepartmentService from '../services/departmentService'


export default function DepartmentList() {

    const [departments, setDepartments] = useState([])

    useEffect(() => {
        let departmentService = new DepartmentService()
        departmentService.getDepartments().then(result => setDepartments(result.data.data))
    })

    return (
        <div>

            <label htmlFor="departments">Department</label> <br></br>
            <select name="" id="departmentId">
                <option>Tümü</option>
                {departments.map((department) => (
                    <option key={department.departmentId} value={department}>
                        {department.departmentName}
                    </option>
                ))}
            </select>

        </div>
    )
}
