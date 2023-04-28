import './input.css'
import { BsChevronLeft } from 'react-icons/bs'
import DatePicker from 'react-datepicker'
import { useState, useCallback } from 'react'
import "react-datepicker/dist/react-datepicker.css"
import { categoriesItem } from '../../constants/index'
import { Button, Container } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
const Input = () => {
  const navigate = useNavigate()
  const [select, setSelected] = useState(null)
  const date = new Date()
  const [starttime, setstarttime] = useState(`${date.getHours()}:${date.getMinutes()}`)
  const [endtime, setendtime] = useState(`${date.getHours()}:${date.getMinutes()}`);
  const [startDate, setStartDate] = useState(new
    Date())
  const [taskName, setTaskName] = useState("")
  const [desc, setDesc] = useState("")
  const handleClick = (item) => {

    setSelected(() => item)
    if (!window.navigator) return alert("no navigator in windows")
    window.navigator.vibrate([10])
  }
  const handleSubmit = e => {
    e.preventDefault()
    addToDo({

      id: 23, taskName, startDate, endtime, starttime, desc
    })
    navigate("/view")
  }
  const dispatch = useDispatch()
  const addToDo = useCallback((payload) => dispatch({ type: 'ADD_TODO', payload }), [])
  return (
    <Container maxWidth="sm" className="container input__container">
      <header className="header">
        <span onClick={() => navigate(-1)}><BsChevronLeft className='chevron' size={20} title={"back button "}></BsChevronLeft></span>
        <h2 onClick={() => addToDo({ id: 23, name: "rose frak" })}>Create a new Task</h2>
      </header>
      <form onSubmit={handleSubmit}>
        {/* <h1 title={"this title is required"}>Task Name</h1> */}
        <div className='input--container'>

          <input type="text" value={taskName} id="task" required onChange={e => setTaskName(e.target.value)} />
<label htmlFor='task' className="mask">Task Name</label>
          <p className="error">error ,please this field should be filled</p>
        </div>
        <h1>Category</h1>
        <div className="category__container scrollto">
          {
            categoriesItem.map((item) => <Button type={"button"} className="btn"
              variant={select == item ? "contained" : "outlined"}
              color={"success"} onClick={() => handleClick(item)}>{item}</Button>)}

        </div>
        {select == null && <p className="error">error ,please select a category</p>}
        <h1>Date & Time</h1>
        <DatePicker showIcon={true}
          selected={startDate}
          onChange={(e) => setStartDate(e)} />
        <div className="date__container">

          <div>
            <Button className="btn" color='success' type={"button"} variant="contained">start time</Button>
            <input type="time" required value={starttime} onChange={({ value }) => setstarttime(value)} />
          </div>
          <div>
            <Button className="btn" color='success' type={"button"} variant="contained" sx={{ xs: { border: "2px solid orange" } }}>start time</Button>

            {/* <button className="btn" type={"button"}>end time</button> */}
            <input type="time" required placeHolder={"12:1"} value={endtime} onChange={({ value }) => setendtime(value)} />
          </div>
        </div>
        <textarea value={desc} onChange={e => setDesc(e.target.value)} placeHolder={"add a description your task"} style={{
          ":placeholder": "center"

        }} ></textarea>
        <Button className="btn submit" variant="contained" color="primary" type={"submit"}>Add Task</Button>
      </form>

    </Container>
  )
}

export default Input