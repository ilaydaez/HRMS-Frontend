export const ADD_TO_RECORDED ="ADD_TO_RECORDED"

export function addToRecorded(jobAdversiment){
    return{
        type:ADD_TO_RECORDED,
        payload: jobAdversiment
    }
}