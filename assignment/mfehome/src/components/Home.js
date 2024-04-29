import React from 'react';
import {CDSFlex} from "@ciscodesignsystems/cds-react-flex"
import {CDSContainer} from "@ciscodesignsystems/cds-react-container"
import {CDSSkeleton} from "@ciscodesignsystems/cds-react-skeleton"
import {CDSText} from "@ciscodesignsystems/cds-react-text"

// import Navbar from '../container/src/Navbar';
 
const Home=()=>{
  return (
    <CDSContainer > 
    <CDSFlex
    direction="vertical"
    gap="sm"
       >

<CDSText
    size="p1"
    weight="bold"
  >
    Short phrase
  </CDSText>


  
 
    
    <CDSText
    size="p1"
    weight="bold"
  >
    Medium sized phrase
  </CDSText>


      


 
    </CDSFlex>
    </CDSContainer>
  );
};

export default Home;