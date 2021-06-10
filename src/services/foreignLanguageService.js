import axios from 'axios'

export default class ForeignLanguageService {
    getLanguages() {
        return axios.get("http://localhost:8080/api/foreignLanguages/getall")
    }

}