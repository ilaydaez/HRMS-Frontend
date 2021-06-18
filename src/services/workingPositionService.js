import axios from 'axios'

export default class WorkingPositionService{
    getWorkingPositions(){
        return axios.get("http://localhost:8080/api/workingPositions/getall")
    }
}