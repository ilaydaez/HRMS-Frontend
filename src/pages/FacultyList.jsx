import React, { useEffect, useState } from 'react'
import { Dropdown } from 'semantic-ui-react'
import FacultyService from '../services/facultyService'

export default function FacultyList() {

    const [faculties, setFaculties] = useState([])

    useEffect(() => {
        let facultyService = new FacultyService()
        facultyService.getFaculties().then(result => setFaculties(result.data.data))
    })

    const faculty = faculties.map(faculty => (
        {
            key: 'faculty.facultyId',
            text: (faculty.facultyName),
            value: (faculty.facultyName)
        }
    ))

    return (
        // <div>

        //     <label htmlFor="faculties">Faculty</label> <br></br>
        //     <select name="" id="facultyId">
        //         <option>Tümü</option>
        //         {faculties.map((faculty) => (
        //             <option key={faculty.facultyId} value={faculty}>
        //                 {faculty.facultyName}
        //             </option>
        //         ))}
        //     </select>

        // </div>

        <Dropdown icon='graduation cap' labeled
        button className='icon' placeholder='Faculty' multiple selection search options={faculty} />
    )
}
