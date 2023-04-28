import './App.css'
// import { Home, Input,View } from './pages'
// import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import { Routes, Route,BrowserRouter } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { actions } from './store'
const {addBy,increment,decrement}=actions
const App = () => {
    const counter = useSelector((state) => state.counter)
    const dispatch=useDispatch();
    
    return (
        <>
            <h1>Counter value is {counter}</h1>
            <button onClick={()=>dispatch(increment())}>increement</button>
            <button onClick={()=>dispatch(decrement())}>decrement</button>
            <button onClick={()=>dispatch(addBy(10))}>add 10</button>
        </>

    )
}
export default App