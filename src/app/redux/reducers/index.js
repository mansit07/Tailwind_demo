import { combineReducers } from "redux";

// Import all reducers
import userReducers from "./userReducers";

const reducers = combineReducers({
    users: userReducers
})

export default reducers;