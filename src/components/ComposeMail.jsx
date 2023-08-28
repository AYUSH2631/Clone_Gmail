
import { Dialog ,Box,Typography,styled, InputBase, TextField,Button} from "@mui/material";
import { Close, Padding ,DeleteOutline} from "@mui/icons-material";
import { useState } from "react";
const dialogStyle ={
    height:'90%',
    width:'80%',
    maxWidth:'100%',
    maxHeight:'100%',
    boxShadow:'none',
    borderRadius:'10px 10px 10px 10px'


}

const Header=styled(Box)({
    height:100,
    maxHeight:10,
    display:"flex",
    justifyContent:'space-between' ,
    padding:'15px 15px',
    background:'#f2f6fc',
    '& >p':{
        fontSize:14,
        fontWeight:500
    }


})

const ReciWrap=styled(Box)({
    display: 'flex',
    flexDirection:'column',
    padding:'0 15px',
    '& >div':{
        fontSize:14,
        borderBottom:'1px solid #F5F5F5',
        marginTop:10

    }
})

const Footer=styled(Box)({
    display:'flex',
    justifyContent:'space-between',
    padding:'10px 15px',
    alignItems:'center'

    
})

const SendButton=styled(Button)({
    background:'#0B57D0',
    color:'#FFFFFF',
    borderRadius:'10px 10px',
    fontWeight:500,
    width:'100px'

})



const ComposeMail=({openDialog,setOpenDialog})=>{

    const[data,setData]=useState({});

    const config={
        Host : "smtp.elasticemail.com",
            Username : "ayushsinha26@yopmail.com",
            Password : "114877B2FCA1000549B09789F5FD6C8B42F4",
            Port:2525
    }

    const closeComposeMail = (e) => {
        e.preventDefault();
    
        setOpenDialog(false);
    }

    const sendMail=(e)=>{

            e.preventDefault();
        if(window.Email){
           

           window.Email.send({
                ...config,
                To : data.to,
                From : "19rajayush109@gmail.com",
                Subject : data.subject,
                Body : data.body
            }).then(
              message => alert(message)
            );
        }

       
        setOpenDialog(false);
    }

    const onValueChange= (e)=>{

        setData({ ...data, [e.target.name]: e.target.value })
            console.log(data);
    }
    
    return(
        <Dialog
        open={openDialog}
        PaperProps={{sx:dialogStyle}}
        >
           <Header>
                <Typography>New Message</Typography>
                <Close fontSize="small" onClick={(e)=>closeComposeMail(e)}/>
           </Header>
           <ReciWrap>
                <InputBase placeholder="Recipient" name="to" onChange={(e)=>onValueChange(e)}/>
                <InputBase placeholder="Subject" name="subject" onChange={(e)=>onValueChange(e)}/>
           </ReciWrap>
           <TextField
           multiline
           rows={20}
           sx={{'& .MuiOutlinedInput-notchedOutline':{border:'none'}}}
           onChange={(e)=>onValueChange(e)}
           name="body"></TextField>
           <Footer>
            <SendButton onClick={(e)=>sendMail(e)}> 
                Send
            </SendButton>
            <DeleteOutline onClick={()=> setOpenDialog(false)}/>

           </Footer>
        </Dialog> 
    )
}

export default ComposeMail;