import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from 'axios';
import { Header, MusicBody,Footer } from "./containers/Index";
import { Download,Home,Music,Search,Stream,Top100,Upload, Sidebar,Slideshow, MusicBar,Signup, Signin } from "./components/index.js";
import './app.css'
export default function App () {
    return(
      <div className="App">
      <div className="gradient__bg">
      
      <BrowserRouter>
          
          <Sidebar>
          <Header/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path='/stream' element={<Stream/>}></Route>
                <Route path="/search" element={<Search/>}></Route>
                <Route path="/newmusic" element={<Music/>}></Route>
                <Route path="/download" element={<Download/>}></Route>
                <Route path="/top100" element={<Top100/>}></Route>
                <Route path='/upload' element= {<Upload/>}></Route>
                <Route path ='/signin' element={<Signin/>}></Route>
                <Route path ='/signup' element = {<Signup/>}></Route>
            </Routes> 
          </Sidebar>
          
          <MusicBody/>
          <Footer/>
          </BrowserRouter>
          <MusicBar/>

      </div>
      </div>
      
      
    )
  }