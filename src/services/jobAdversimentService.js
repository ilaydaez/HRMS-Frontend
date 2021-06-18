import axios from 'axios'

export default class JobAdvesimentService{
    getJobAdversiments(){
        return axios.get("http://localhost:8080/api/jobAdversiments/getall")
    }

    getByJobAdversimentId(id){
        return axios.get("http://localhost:8080/api/jobAdversiments/getByAdversimentId?id="+id)
    }

}