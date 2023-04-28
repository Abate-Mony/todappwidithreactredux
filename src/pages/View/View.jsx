import { Stack, Typography, Box, Container } from '@mui/material'
import { useSelector, useDispatch, GetProps } from 'react-redux'
import {
    AiFillHome, AiOutlineUser
} from 'react-icons/ai'

import {
    IoMdAdd
} from 'react-icons/io'

import { useNavigate } from 'react-router-dom'
import ItemList from '../../components/ItemList'

import { useState } from "react"


const View = () => {
    const navigate = useNavigate()

    const [counter, setCounter] = useState(0)
    // setCounter((c)=>c+1)
    function addTodo(value, counter = null) {
        return {
            type: "ADD_TODO", payload: { id: 1, todo: value }
        }
    }
    function removeTodo(id) {
        return {
            type: "REMOVE_TODO", id: 1
        }
    }
    const select = useSelector(state => state.todo);
    const dispatch = useDispatch()
    console.log(select)
    // dispatch(removeTodo(1))
    return (
        <Box sx={{ backgroundColor: "#fbfbfb", margin: "0!important", minHeight: "100vh", width: "100vw" }}>
            <Container maxWidth="sm">

                <Stack direction="row"
                    alignItems={"center"}
                    className="view__top-nar" m="2"
                    sx={{ background: "#fff",position:"fixed",top:0,width:"100%",left:0,height:"60px" }} >

                    <Typography variant="h5" my="10px" onClick={() => dispatch(addTodo("ako bate emmanuel"))}
                        component="h5" guuterBottom noWrap sx={{
                            flex: 1,
                            textAlign: "center", fontWeight: "600", color: "primary.dark", letterSpacing: "0.1rem"
                        }}>View Task</Typography>
                </Stack>


                <Box onClick={() => dispatch(removeTodo(1))}  mt="60px">
                    {

                        select.map((_val, idx) => {


                            return (
                                <ItemList heading={_val?.taskName} desc={_val?.desc} key={idx} />

                            )
                        })

                    }
                    {/* <ItemList desc={"hello bro send the code and the name of the file and the file path"}

                        heading={"User two"} />
                    <ItemList desc={"father and the song are save and walking home"} heading={"selling float for binance tomorrow"} />
                    <ItemList desc={"the name of the code "} heading={"selling float for binance tomorrow"} /> */}

                </Box>
            </Container>





            <Stack direction="row" mt="30px" justifyContent="center"
                alignItems="center" sx={{
                    py: "1rem", gap: "2rem", position: "fixed", width: "100%", bottom: "10px"
                }}>
                <Box sx={{
                    display: "grid", placeItems: "center"
                }}>
                    <AiFillHome size={30} color="blue"></AiFillHome>
                </Box>
                <Box
                    onClick={() => navigate("/add")}

                    width="50px" height="50px" sx={{
                        display: "grid", placeItems: "center",
                        backgroundColor: "primary.dark", borderRadius: "9999px", mt: "-25px"
                        ,
                        "&:hover": { "backgroundColor": "primary.main" }, opacity: [0.9, 0.8, 0.7]
                    }}>
                    <IoMdAdd size={30}></IoMdAdd>
                </Box>

                <Box sx={{
                    display: "grid", placeItems: "center"
                }}>
                    <AiOutlineUser size={30}></AiOutlineUser>
                </Box>

            </Stack>
        </Box>
    )
}

export default View