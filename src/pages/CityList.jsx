import React, { useEffect, useState } from 'react'
import CityService from '../services/citiyService'

export default function CityList() {

    const [cities, setCity] = useState([])

    useEffect(() => {
        let cityService = new CityService()
        cityService.getCities().then(result => setCity(result.data.data))
    })

    return (
        <div>
            <label htmlFor="cities">City</label>
            <br></br>
            <select name="" id="cityId">
                <option>Tümü</option>
                {cities.map((city) => (
                    <option key={city.cityId} value={city}>
                        {city.city}
                    </option>
                ))}
            </select>

        </div>
    )
}
