import thunk from "redux-thunk";
import reducers from "./reducers";
import {applyMiddleware, legacy_createStore as createStore} from "redux";

// middleware is for handling actions that might not be synchronous,
// for example, using axios to send a GET request.
// Redux Thunk allows us to dispatch those actions asynchronously
// and resolve each promise that gets returned.

const store = createStore(
    reducers,
    applyMiddleware(thunk)
)

export default store