
import { Drawer,styled } from "@mui/material";
import SideBarcontent from "./SideBarContent";
const Sidebar=({openDrawer})=>{
    return(
        <Drawer  anchor='left'
        open={openDrawer}
        hideBackdrop={true}
        ModalProps={{
            keepMounted: true // Better open performance on mobile.
        }}
        variant="persistent"
        sx={{
            '& .MuiDrawer-paper':{
                marginTop:'64px',
                width:250,
                background:'#F5F5F5',
                borderRight:'none',
                height:'calc(200vh-64px)'
            }
        }}
        >
           <SideBarcontent></SideBarcontent>
        </Drawer>
    );
}

export default Sidebar;