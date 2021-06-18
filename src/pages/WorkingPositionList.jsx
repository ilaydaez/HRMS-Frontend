import React, { useEffect, useState } from 'react'
import { Dropdown } from 'semantic-ui-react'
import WorkingPositionService from '../services/workingPositionService'

export default function WorkingPositionList() {

    const [workingPositions, setWorkingPositions] = useState([])

    useEffect(() => {
        let workingPositionService = new WorkingPositionService()
        workingPositionService.getWorkingPositions().then(result => setWorkingPositions(result.data.data))
    }, [])

    const workingPosition = workingPositions.map(workingPosition => (
        {
            text: (workingPosition.location),
            value: (workingPosition.location)
        }
    ))

    return (
        <div>
            <Dropdown icon='find' labeled
                button className='icon' placeholder='Working Position' multiple selection search options={workingPosition} />

        </div>
    )
}
