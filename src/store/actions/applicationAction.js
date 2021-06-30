export const ADD_TO_APPLICATION = "ADD_TO_APPLICATION"

export function addToApplication(jobAdversiment) {
    return {
        type : ADD_TO_APPLICATION,
        payload: jobAdversiment
    }
    
}