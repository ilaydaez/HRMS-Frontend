import React, { useEffect, useState } from 'react'
import { Dropdown } from 'semantic-ui-react'
import SchoolService from '../services/schoolService'

export default function SchoolList() {

    const [schools, setSchools] = useState([])

    useEffect(() => {
        let schoolService = new SchoolService()
        schoolService.getSchools().then(result => setSchools(result.data.data))
    },[])

    const school = schools.map(school => (
        {
            // key: 'school.schoolId',
            text: (school.schoolName),
            value: (school.schoolName)
        }
    ))

    return (
        // <div>

        //     <label htmlFor="schools">School</label> <br></br>
        //     <select name="" id="schoolId" search selection>
        //         <option>Tümü</option>
        //         {shools.map((school) => (
        //             <option key={school.schoolId} value={school}>
        //                 {school.schoolName}
        //             </option>
        //         ))}
        //     </select>

        // </div>

        <Dropdown icon='university' labeled
        button className='icon' placeholder='School' multiple selection search options={school} />
    )
}
