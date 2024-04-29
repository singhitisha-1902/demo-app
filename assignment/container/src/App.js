import React, { useState, createContext, useContext} from 'react';
import { lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';

import Cont from './Context';
import Navbar from './Navbar';
import {CDSThemeProvider} from "@ciscodesignsystems/cds-react-theme-provider";
import { CDSContainer } from '@ciscodesignsystems/cds-react-container';


const Home = React.lazy(async () => await import('mfehome/HomeApp'));
const User = React.lazy(async () => await import('mfeuser/UserApp'));
// const Home= lazy(() => import('mfehome/HomeApp'));
// const User= lazy(() => import('mfeuser/UserApp'));
const ThemeContext = createContext(null);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {

    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    
    setIsLoggedIn(false);
  };

  const [theme, setTheme]= useState('light');

  return (

  
    <Router>
   
        <CDSThemeProvider theme={theme}>
     
     <ThemeContext.Provider value={{ theme, setTheme }}>
  
{/*       
        {isLoggedIn && <Navbar onLogout={handleLogout}/>} */}
        <Routes>
          <Route
            path="/"
            element={<Login onLogin={handleLogin} />}
          />
          {isLoggedIn && (
         <>
              <Route path="/home"   element={<React.Suspense fallback ="Loading"><Navbar option="home" onLogout={handleLogout}/></React.Suspense>}/>
              <Route path="/usermanagement" element={<React.Suspense fallback ="Loading"><Navbar option="usermanagement" onLogout={handleLogout}/></React.Suspense>} />
              {/* <Route path="/usermanagement" element={<User/>} /> */}
            </>
          )}
        </Routes>
  
      </ThemeContext.Provider>
    </CDSThemeProvider>
 
    </Router>
  
  );
}

export default App;
export { ThemeContext };
// element={<React.Suspense fallback ="Loading"><Home/></React.Suspense>}
// element={<React.Suspense fallback ="Loading"><User/></React.Suspense>}