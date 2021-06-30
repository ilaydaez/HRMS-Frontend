import { ADD_TO_APPLICATION } from "../actions/applicationAction";
import { applicationItems } from "../initialValue/applicationItems";

const initialState = {
    applicationItems: applicationItems
}

export default function applicationReducer(state = initialState, { type, payload }) {

    switch (type) {

        case ADD_TO_APPLICATION:

            let jobAdversiment = state.applicationItems.find(a => a.jobAdversiment.adversimentId === payload.adversimentId)

            if (jobAdversiment) {
                jobAdversiment.quantity++;
                return {
                    ...state
                }
            } else {
                return {
                    ...state,
                    applicationItems: [...state.applicationItems, { quantity: 1, jobAdversiment: payload }]
                }
            }

        default:
            return state;
    }

}