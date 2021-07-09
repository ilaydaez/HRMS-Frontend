import axios from 'axios'

export default class CreateCvService {
    getCvs() {
        return axios.get("http://localhost:8080/api/createCvs/getall")
    }

    getCvId(id) {
        return axios.get("http://localhost:8080/api/createCvs/getByCvId?id="+id)
    }

    getCvWithEmployeeCvId(id) {
        return axios.get("http://localhost:8080/api/createCvs/getByCvWithEmployee_CvId?id="+id)
    }

    addCv(cv) {
        return axios.post("http://localhost:8080/api/createCvs/add",cv)
    }

    getByCvWithEmployees() {
        return axios.get("http://localhost:8080/api/createCvs/getCvWithEmployeeDto")
    }

}