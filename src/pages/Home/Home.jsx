import './home.css'
import {Button,Container} from "@mui/material"
import banner from '../../assest/images/images.jpg'
import {Link } from 'react-router-dom'
const Home = () => {
    return (
        <Container maxWidth="sm" className='container' >

            <div className="home__container">
            
            <div className="img__container">
            <img src={banner} alt="banner" />
            
            </div>
            <div className='content-container'>
            
            
            <h2>Welcome to Go Task</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora magnam incidunt distinctio iusto, ea numquam!</p>
            </div>
            
            <div className="btn-container">
            <Button className="btn" variant="contained"  color="primary"> <Link to={"/add"} 
            style={{width:"100%",color:"inherit",textDecoration:"none",}}>Lets start</Link> </Button>
            </div>
            </div>

        </Container>
    )
}

export default Home