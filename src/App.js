import './App.scss';
import Home from "./components/Home";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import actions from "./actions";


function App() {

    const dispatch = useDispatch()

    // call dispatch function to get data from API
    useEffect(() => {
        dispatch(actions.dataAction.fetchData())
    }, [])

    return (
        <Home/>
    )
}

export default App;
