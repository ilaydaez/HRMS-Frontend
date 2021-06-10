import React, { useEffect, useState } from 'react'
import SchoolService from '../services/schoolService'

export default function SchoolList() {

    const [shools, setSchools] = useState([])

    useEffect(() => {
        let schoolService = new SchoolService()
        schoolService.getSchools().then(result => setSchools(result.data.data))
    })

    return (
        <div>

            <label htmlFor="schools">School</label> <br></br>
            <select name="" id="schoolId" search selection>
                <option>Tümü</option>
                {shools.map((school) => (
                    <option key={school.schoolId} value={school}>
                        {school.schoolName}
                    </option>
                ))}
            </select>

        </div>
    )
}
