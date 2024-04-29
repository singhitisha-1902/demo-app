import React, { useState, useContext} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SlidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { CDSNavItem, nav } from "@ciscodesignsystems/cds-react-nav";
import { CDSText } from "@ciscodesignsystems/cds-react-text";
import * as IoIcons from 'react-icons/io';
import { CDSNav } from "@ciscodesignsystems/cds-react-nav"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  CDSHeader,
  CDSTenantMenuDivider,
  CDSTenantMenuRoot,
  CDSTenantMenuRow,
} from "@ciscodesignsystems/cds-react-header";
import { CDSButton } from "@ciscodesignsystems/cds-react-button";
import { CDSToggle } from '@ciscodesignsystems/cds-react-toggle';


import Context from "./Context";
import { CDSLogoCisco } from "@ciscodesignsystems/cds-react-logos";

import { CDSFlex } from "@ciscodesignsystems/cds-react-flex";

import { lazy } from 'react';

import { CDSContainer } from "@ciscodesignsystems/cds-react-container"
import { CDSHeading } from "@ciscodesignsystems/cds-react-heading";
import { CDSSkeleton } from "@ciscodesignsystems/cds-react-skeleton";
import UserManagement from '../../mfeuser/src/components/UserManagement';
import {ThemeContext} from "./App";
import { Sun } from "phosphor-react";
import { Moon } from "phosphor-react";

import { CDSThemeProvider } from '@ciscodesignsystems/cds-react-theme-provider';
function Navbar({ onLogout, option}) {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const navigate = useNavigate();
  const handleLogout = () => {
    onLogout();
    navigate('/');
  };
  const { pathname } = useLocation();

 const {theme, setTheme}=useContext(ThemeContext);
  
  console.log(theme);
  
    



  return (
<>

      <CDSHeader
        title="Demo Portal"
        logo={
          <CDSLogoCisco primaryTheme={{ sentiment: "inverse", usage: "text" }} />
        }
      >
     




        <CDSTenantMenuRoot
          sentiment="inverse"
          tenantName={
            <CDSText color="white" size="p4">
       Hello Itisha
            </CDSText>
          }
          userName={name}
        >


<CDSTenantMenuRow
  
            leftGutter={
           
              <CDSToggle
              checked={theme === "dark"}
              onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
           
            >
             {theme === "dark" ? "Dark" : "Light"}
            </CDSToggle>
            }
          >
                 </CDSTenantMenuRow>
          <CDSTenantMenuRow
            rightGutter={
              <CDSButton onClick={handleLogout} variant="secondary">
                Logout
              </CDSButton>
            }
          >
            <p
              style={{
                fontSize: "12px",
                textTransform: "uppercase",
              }}
            >
              Logged in as
            </p>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              Itisha
            </p>
            <p
              style={{
                fontSize: "14px",
              }}
            >
              itsingh@cisco.com
            </p>
          </CDSTenantMenuRow>
          <CDSTenantMenuDivider />

          <CDSTenantMenuDivider />
        </CDSTenantMenuRoot>    
      </CDSHeader>
  

     
     
      


      {/*       
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link> */}
      {/* <button onClick={handleLogout} className='logoutButton'>Logout</button> */}

      {/* </div> */}






      {/* <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}> */}

    
      <CDSContainer style={{
        display: "grid",
        gridTemplateColumns: "min-content 1fr",
        height: "90vh"
      }}>

   

        <CDSNav >
   
          <CDSNav.Item
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
        
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                />
              </svg>
            }
            
            onClick={() => navigate("/home")}
          

          >
         

           
            
         <span style={{ marginLeft: '0px' }}>Home</span>
          
          </CDSNav.Item>
     
          <CDSNav.Item 
            isSelected={pathname === "/usermanagement"}
         
            icon={
              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 shrink-0"
              >

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            }
            onClick={() => navigate("/usermanagement")}

          >
            User Management

          </CDSNav.Item>
         
          {/* <CDSFlex gap={10}>
                  <CDSButton
                    icon={<Sun size={16} weight="bold" />}
                    onClick={() => setTheme("light")}
                  />
                  <CDSButton
                    icon={
                      <Moon
                        size={16}
                        weight="bold"
                        onClick={() => setTheme("dark")}
                      />
                    }
                  />
                  </CDSFlex> */}



        </CDSNav>
  



        {/* <CDSFlex direction="vertical" justify="center" align="center" style={{
          height: "93vh",
          padding: "20%",
        }}> */}

        {/* <CDSContainer style={{
            height: '400px'
          }}> */}
        <Context option={option} />
        {/* </CDSContainer> */}
        {/* </CDSFlex> */}
       
      
</CDSContainer>
</>
   

  );
}


export default Navbar;