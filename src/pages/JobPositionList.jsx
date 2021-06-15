import React, { useEffect, useState } from 'react'
import { Dropdown } from 'semantic-ui-react'
import JobPositionService from '../services/JobPositionService'


export default function JobPositionList() {

  const [jobPositions, setJobPosition] = useState([])

  useEffect(() => {
    let jobPositionService = new JobPositionService()
    jobPositionService.getJobPositions().then(result => setJobPosition(result.data.data))
  },[])

  const position = jobPositions.map(position=> (
     {
      //  key:'position.positionId',
       text : (position.position),
       value: (position.position)
     }
  ))

  return (
     <Dropdown icon='filter' labeled
     button className='icon' placeholder='Job Position' multiple selection search options={position} />
  )


}
