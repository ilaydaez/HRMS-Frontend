import axios from 'axios'

export default class CreateCvService {
    getCvs() {
        return axios.get("http://localhost:8080/api/createCvs/getall")
    }

    getCvId(id) {
        return axios.get("http://localhost:8080/api/createCvs/getByCvId?id="+id)
    }

    putCvUpdate(cv) {
        return axios.put("http://localhost:8080/api/createCvs/update")
    }

    getByCvWithEmployees() {
        return axios.get("http://localhost:8080/api/createCvs/getCvWithEmployeeDto")
    }

}