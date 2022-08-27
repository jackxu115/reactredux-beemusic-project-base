import thunk from "redux-thunk";
import reducers from "./reducers";
import {applyMiddleware, legacy_createStore as createStore} from "redux";


const store = createStore(
    reducers,
    applyMiddleware(thunk)
)

export default store