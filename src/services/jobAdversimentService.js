import axios from 'axios'

export default class JobAdvesimentService{
    getJobAdversiments(){
        return axios.get("http://localhost:8080/api/jobAdversiments/getall")
    }

    getJobAdversimentWithWorkingTime(){
        return axios.get("http://localhost:8080/api/jobAdversiments/getByJobAdversimentWithWorkingTime")
    }

    getByJobAdversimentId(id){
        return axios.get("http://localhost:8080/api/jobAdversiments/getByAdversimentId?id="+id)
    }

    add(values){
        return axios.post("http://localhost:8080/api/jobAdversiments/add",values)
    }

    
}