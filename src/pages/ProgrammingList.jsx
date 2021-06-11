import React, { useEffect, useState } from 'react'
import { Dropdown } from 'semantic-ui-react'
import ProgrammingService from '../services/programmingService'

export default function ProgrammingList() {

    const [programmings, setProgrammings] = useState([])

    useEffect(() => {
        let programmingService = new ProgrammingService()
        programmingService.getProgrammings().then(result => setProgrammings(result.data.data))
    })

    const programming = programmings.map(programming => (
        {
            key: 'programming.programmingId',
            text: (programming.programming),
            value: (programming.programming)
        }
    ))

    return (
        // <div>

        //     <label htmlFor="programmings">Programming</label> <br></br>
        //     <select name="" id="programmingId">
        //         <option>Tümü</option>
        //         {programmings.map((programming) => (
        //             <option key={programming.programmingId} value={programming}>
        //                 {programming.programming}
        //             </option>
        //         ))}
        //     </select>

        // </div>

        <Dropdown icon='code' labeled
        button className='icon' placeholder='Programming' multiple selection search options={programming} />
    )
}
