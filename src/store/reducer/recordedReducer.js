
import { ADD_TO_RECORDED } from '../actions/recordedAction';
import {recordedItems} from "../initialValue/recordedItems"

const initialState={
    recordedItems : recordedItems
}

export default function recordedReducer(state = initialState, { type, payload }) {

    switch (type) {

        case ADD_TO_RECORDED:

            let jobAdversiment = state.recordedItems.find(r => r.jobAdversiment.adversimentId === payload.adversimentId)

            if (jobAdversiment) {
                jobAdversiment.quantity++;
                return {
                    ...state
                }
            } else {
                return {
                    ...state,
                    recordedItems: [...state.recordedItems, { quantity: 1, jobAdversiment: payload }]
                }
            }

        default:
            return state;
    }
}
