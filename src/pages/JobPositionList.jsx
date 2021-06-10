import React, { useEffect, useState } from 'react'
import JobPositionService from '../services/JobPositionService'



export default function JobPositionList() {

    const [jobPositions, setJobPosition] = useState([])

    useEffect(() => {
        let jobPositionService = new JobPositionService()
        jobPositionService.getJobPositions().then(result => setJobPosition(result.data.data))
    })

    return (
        <div>
            <label htmlFor="jobPositions">Job Position</label> <br></br>
            <select name="" id="positionId">
                <option>Tümü</option>
                {jobPositions.map((position) => (
                  <option key={position.positionId} value={position}>
                    {position.position}
                  </option>
                ))}
              </select>
            
        </div>

    )


}
