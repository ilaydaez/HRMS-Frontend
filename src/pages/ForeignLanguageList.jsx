import React, { useEffect, useState } from 'react'
import ForeignLanguageService from '../services/foreignLanguageService'


export default function ForeignLanguageList() {

    const [languages, setLanguages] = useState([])

    useEffect(() => {
        let foreignLanguageService = new ForeignLanguageService()
        foreignLanguageService.getLanguages().then(result => setLanguages(result.data.data))
    })

    return (
        <div>

            <label htmlFor="languages">Language</label> <br></br>
            <select name="" id="languageId">
                <option>Tümü</option>
                {languages.map((language) => (
                    <option key={language.languageId} value={language}>
                        {language.language}
                    </option>
                ))}
            </select>

        </div>
    )
}
