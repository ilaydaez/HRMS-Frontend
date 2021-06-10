import axios from 'axios'

export default class ProgrammingService {
    getProgrammings() {
        return axios.get("http://localhost:8080/api/prorammings/getall")
    }

}