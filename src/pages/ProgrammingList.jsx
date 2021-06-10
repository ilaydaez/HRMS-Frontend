import React, { useEffect, useState } from 'react'
import ProgrammingService from '../services/programmingService'

export default function ProgrammingList() {

    const [programmings, setProgrammings] = useState([])

    useEffect(() => {
        let programmingService = new ProgrammingService()
        programmingService.getProgrammings().then(result => setProgrammings(result.data.data))
    })

    return (
        <div>

            <label htmlFor="programmings">Programming</label> <br></br>
            <select name="" id="programmingId">
                <option>Tümü</option>
                {programmings.map((programming) => (
                    <option key={programming.programmingId} value={programming}>
                        {programming.position}
                    </option>
                ))}
            </select>

        </div>
    )
}
