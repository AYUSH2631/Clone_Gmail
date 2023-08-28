
import { Box ,Button,styled,List,ListItem} from "@mui/material";
import { CreateOutlined, Photo } from "@mui/icons-material";
import { SIDEBAR_DATA } from "../config/sidebar.config";
import ComposeMail from "./ComposeMail";
import { useState } from "react";

const ComposeButton=styled(Button)({
    background: '#c2e7ff',
    color:'#001d35',
    padding:16,
    borderRadius:16,
    minWidth:140,
    textTransform:'none'

})

const Container = styled(Box)({
    padding: 8,
    '& > ul' :{
        padding: '10px 0 0 5px',
        fontsize: 14,
        fontweight: 500,
        cursor: 'pointer',
    //    ' & > a': {
    //         textdecoration: none,
    //         color: inherit,
    //     },
    },
        '& > ul > li > svg': {
            marginRight: 20
        }
    

})
const SideBarContent=()=>{

    const[openDialog,setOpenDialog]=useState(false)
    const onComposeClick=()=>{
        setOpenDialog(true)
    }

    return(
     <Container>
            
                <ComposeButton onClick={()=>onComposeClick()}>
                    <CreateOutlined/>compose</ComposeButton>
            
          <List>
            {
                SIDEBAR_DATA.map(data=>(
                    <ListItem>
                        <data.icon fontSize="small"/>{data.title}
                    </ListItem>
                ))
            }
          </List>

          <ComposeMail openDialog={openDialog} setOpenDialog={setOpenDialog}></ComposeMail>
          </Container>
    )
}
export default SideBarContent;