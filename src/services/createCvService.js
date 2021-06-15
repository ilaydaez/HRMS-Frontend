import axios from 'axios'

export default class CreateCvService {
    getCvs() {
        return axios.get("http://localhost:8080/api/createCvs/getall")
    }

    getByCvWithEmployees() {
        return axios.get("http://localhost:8080/api/createCvs/getCvWithEmployeeDto")
    }

}