import { combineReducers } from "redux";
import applicationReducer from "./reducer/applicationReducer";
import recordedReducer from "./reducer/recordedReducer";


const rootReducer = combineReducers({
    application : applicationReducer,
    recorded: recordedReducer
})

export default rootReducer;