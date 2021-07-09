import React, { useEffect, useState } from 'react'
import { Dropdown, Form } from 'semantic-ui-react'
import CityService from '../services/citiyService'





export default function CityList() {

    const [cities, setCity] = useState([])

    useEffect(() => {
        let cityService = new CityService()
        cityService.getCities().then(result => setCity(result.data.data))
    })

    const city = cities.map(city => (
        {
            text: (city.city),
            value: (city.city)
        }
    ))

    const Cities = (
        <Form>
            <Form.Group grouped>
                <Form.Checkbox label={city} name='city' value={city} />
            </Form.Group>
        </Form>
    )

    return (
         <Dropdown icon='world' labeled
         button className='icon' placeholder='City' multiple selection search options={city} />
    )
}
