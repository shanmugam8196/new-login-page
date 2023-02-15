import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Signin from './componemt/signin';
import Signup from './componemt/signup';
import React from 'react';
function App() {
  return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Signup/>}/>
                    <Route path="/signin" element={<Signin/>}/>
                </Routes>
            </BrowserRouter>
        </>

  );
}

export default App;
