import React,{useContext} from 'react'
import Home from 'mfehome/HomeApp'
import User from 'mfeuser/UserApp'
import {CDSFlex} from '@ciscodesignsystems/cds-react-flex'

// const Home = React.lazy(async () => await import('mfehome/HomeApp'));
// const User = import('mfeuser/UserApp'));


const Context=(({option})=>{
    let content = <CDSFlex direction="vertical" justify="center" align="center" style={{height:"60vh"}}><Home/></CDSFlex>;
    if(option==="home"){
        return content;
    }
        return <User/>;
})
export default Context;