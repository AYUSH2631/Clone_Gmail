import Header from '../components/Header'
import Sidebar from '../components/Sidebar';
import { useState } from 'react';

const Main = () =>{

    const [openDrawer,setOpenDrawer]=useState(true);

    const toggleDrawer=()=>{
        setOpenDrawer(prevState =>!prevState);
    }
    return(
        <>
        <div>
            <Header toggleDrawer={toggleDrawer}></Header>
        <Sidebar openDrawer={openDrawer}></Sidebar>
        </div>
        <div>
            Display Mail
        </div>

        </>
    );
}

export default Main;