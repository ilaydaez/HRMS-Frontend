import React, { useEffect, useState } from 'react'
import { Dropdown } from 'semantic-ui-react'
import WorkingTimeService from '../services/workingTimeService'

export default function WorkingTimeList() {

    const [workingTimes, setWorkingTimes] = useState([])
    useEffect(() => {
        let workingTimeService=new WorkingTimeService()
        workingTimeService.getWorkingTimes().then(result=>setWorkingTimes(result.data.data))

    }, [])

    const workingTime= workingTimes.map(workingTime=>({
        text:(workingTime.time),
        value:(workingTime.time)
    }))

    return (
        <div>
            <Dropdown icon='find' labeled
                button className='icon' placeholder='Working Time' multiple selection search options={workingTime} />
        </div>
    )
}
