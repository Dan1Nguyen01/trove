import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from 'axios';
import { Header,Footer } from "./containers/Index";
import { Download,Home,MyPlayList,Stream,Top100, Sidebar,Login, Signup,MusicBar, Navbar } from "./components/index.js";
import "bootstrap/dist/css/bootstrap.min.css"
import './app.css'


const code = new URLSearchParams(window.location.search).get('code')
export default function App () {

    return(
      <div className="App">
      <div className="gradient__bg">
      
          
      <BrowserRouter>
         <div className="trove__app-sidebar">
            
            <Sidebar/>
            <Header className='headhaha'/>
         </div>
         
            <div className="trove__app-website">
         
                
          
                <div className='trove__website'>
                  <Routes  >
                    <Route path="/" element={<Home/>}></Route>
                    <Route path='/stream' element={<Stream />}></Route>
                    <Route path="/myplaylist" element={<MyPlayList/>}></Route>
                    <Route path="/download" element={<Download />}></Route>
                    <Route path="/top100" element={<Top100/>}></Route>
                    <Route path="/login"  element= {<Login/>}></Route>
                    <Route path="/signup"  element= {<Signup/>}></Route>
                </Routes> 
                <hr></hr>
              </div>
            </div>
            <MusicBar/>
           
          </BrowserRouter>
          

      </div>
      </div>
      
      
    )
  }