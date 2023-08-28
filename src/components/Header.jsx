
import {AppBar,Toolbar,styled,InputBase, Box} from '@mui/material'
import { Menu as MenuIcons, Tune as Tune,Search as SearchIcons ,HelpOutlineOutlined,SettingsOutlined,AppsOutlined,AccountCircleOutlined} from '@mui/icons-material'; // Updated icon imports
//import { gmailLogo } from '../constants/constant'
//import  newgmaillogo from '../constants/'
//import newgmaillogo from '../img/newgmaillogo'
import { gmailLogo } from '../constants/constant';
const StyledAppBar=styled(AppBar)({
    backgroundColor: '#F5F5F5',
    boxShadow:'none'

})

const Searchwrapper=styled(Box)({
    backgroundColor:'#EAF1FB',
    marginLeft:80,
    borderRadius:8,
    minWidth:690,
    maxWidth:720,
    height:48,
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    padding:'0 20',
    '& >div ':{
        width:'100%',
        padding:'0 10px'
    }
})

const OptionWrap=styled(Box)({

    width:'100%',
    display:'flex',
    justifyContent:'end',
    '& >svg ':{
       marginLeft:20
    }

})
const Header=({toggleDrawer})=>{
    
    return(
        <StyledAppBar position='static'>
            <Toolbar>
                <MenuIcons color='action' onClick={toggleDrawer}></MenuIcons>
                <img src={gmailLogo} alt="logo" style={{ width: 110, marginLeft: 15 }} />
                <Searchwrapper>
                <SearchIcons color='action' />
                    <InputBase placeholder='search mail'></InputBase>
                    <Tune color= 'action'></Tune>
                    </Searchwrapper>
                    <OptionWrap>
                        <HelpOutlineOutlined color='action'></HelpOutlineOutlined>
                        <SettingsOutlined color='action'></SettingsOutlined>
                        <AppsOutlined color='action'></AppsOutlined>
                        <AccountCircleOutlined color='action'></AccountCircleOutlined>
                    </OptionWrap>
               
                
            </Toolbar>
        </StyledAppBar>
    );
}


export default Header;