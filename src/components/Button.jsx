import { act } from "@testing-library/react"
import { useState } from "react"
import "./button.css"
const Button = ({ children }) => {
    const [left, setLeft] = useState(0)
    const [active ,setActive]=useState(false)
    const handleEvents = e => {
        const { target } = e;
        // const {left:l}=target.getBoundingClientRect()
        // console.log(left)
        const l=e.touches[0].clientX
        setLeft(l)
        target.style.setProperty("--left", left+"px")
        handleMouse()
    }
    const handleMouse =()=>{
    setActive(()=>true)
    }
    const handleMouseLeave =()=>{
    setActive(()=>false)
    setLeft(0)
    }
    return (
        <button className={`btn ${active?"active":""}`}
        onTouchStart={handleEvents} onTouchEnd={handleMouseLeave} >{children} {left}</button>
    )
}

export default Button