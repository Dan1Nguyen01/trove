import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from 'axios';
import { Header,Footer } from "./containers/Index";
import { Download,Home,MyPlayList,Stream,Top100,Login, Signup,MusicBar,Sidebar } from "./components/index.js";
import "bootstrap/dist/css/bootstrap.min.css"
import './app.css'


const code = new URLSearchParams(window.location.search).get('code')
export default function App () {

    return(
 
      <div className="gradient__bg">
      
          
      <BrowserRouter>      
            <Sidebar/>
            <Header />
                <div className='trove__website'>
                  <Routes  >
                    <Route path="/" element={<Home/>}></Route>
                    <Route path='/stream' element={<Stream />}></Route>
                    <Route path="/myplaylist" element={<MyPlayList/>}></Route>
                    <Route path="/top100" element={<Top100/>}></Route>
                    <Route path="/login"  element= {<Login/>}></Route>
                    <Route path="/signup"  element= {<Signup/>}></Route>
                    
                </Routes> 
                
              </div>
            <MusicBar/>
          </BrowserRouter>
      </div>
   
      
    )
  }