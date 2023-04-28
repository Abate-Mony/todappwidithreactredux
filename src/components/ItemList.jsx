
import { Grid, Typography, Stack } from '@mui/material'
import { BsChevronRight } from 'react-icons/bs'
import { GiThink } from 'react-icons/gi'

export default function ItemList({heading,desc}) {


    return (<Grid container
    alignItems={"center"} sx={{ py:"10px",px:"5px",margin:"10px 0 !important",
background:"#fff",borderRadius:"10px",boxShadow:1
    ,"&:hover":{
    background:"#ededed",opacaity:[0.5,0.9,0.8]
    }
    
    }} spacing={{ xs: 0, md: 4, lg: 6 }}>
        <Grid item xs={2}>
            <span><GiThink size={40} /></span>
        </Grid>
        <Grid item xs={9} >
            <Stack direction="column" sx={{
                flex: 1, lineHeight: "10px", overFlow: "hidden", displayPrint: "block"
            }} >
                <Typography 
                    noWrap sx={{
                        textWrap: "wrap",
                        overFlow: "auto",fontSize:"1.3rem"
                    }}>{heading}</Typography>
                <Typography guuterBottom noWrap sx={{fontStyle:"oblique",fontSize:"14px"}}>{desc}</Typography>
            </Stack>
        </Grid>
        <Grid item xs={1}>
            <span><BsChevronRight size={20} /></span>
        </Grid>
    </Grid>)


}


