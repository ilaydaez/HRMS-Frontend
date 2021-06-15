import React, { useEffect, useState } from 'react'
import { Dropdown } from 'semantic-ui-react'
import ForeignLanguageService from '../services/foreignLanguageService'


export default function ForeignLanguageList() {

    const [languages, setLanguages] = useState([])

    useEffect(() => {
        let foreignLanguageService = new ForeignLanguageService()
        foreignLanguageService.getLanguages().then(result => setLanguages(result.data.data))
    }, [])

    const language = languages.map(language => (
        {
            key: language.languageId,
            text: (language.language),
            value: (language.language)
        }
    ))


    return (
        // <div>

        //     <label htmlFor="languages">Language</label> <br></br>
        //     <select name="" id="languageId">
        //         <option>Tümü</option>
        //         {languages.map((language) => (
        //             <option key={language.languageId} value={language}>
        //                 {language.language}
        //             </option>
        //         ))}
        //     </select>

        // </div>

        <Dropdown icon='language' labeled
            button className='icon' placeholder='Language' multiple selection search options={language} />
    )
}
