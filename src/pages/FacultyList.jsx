import React, { useEffect, useState } from 'react'
import FacultyService from '../services/facultyService'

export default function FacultyList() {

    const [faculties, setFaculties] = useState([])

    useEffect(() => {
        let facultyService = new FacultyService()
        facultyService.getFaculties().then(result => setFaculties(result.data.data))
    })

    return (
        <div>

            <label htmlFor="faculties">Faculty</label> <br></br>
            <select name="" id="facultyId">
                <option>Tümü</option>
                {faculties.map((faculty) => (
                    <option key={faculty.facultyId} value={faculty}>
                        {faculty.facultyName}
                    </option>
                ))}
            </select>

        </div>
    )
}
